Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

function New-RoundedRectPath([System.Drawing.RectangleF]$rect, [float]$radius) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $diameter = [float](2 * $radius)

  $arc = New-Object System.Drawing.RectangleF($rect.X, $rect.Y, $diameter, $diameter)
  $path.AddArc($arc, 180, 90) | Out-Null

  $arc.X = $rect.Right - $diameter
  $path.AddArc($arc, 270, 90) | Out-Null

  $arc.Y = $rect.Bottom - $diameter
  $path.AddArc($arc, 0, 90) | Out-Null

  $arc.X = $rect.X
  $path.AddArc($arc, 90, 90) | Out-Null

  $path.CloseFigure() | Out-Null
  return $path
}

function New-HitieIconBitmap([int]$size) {
  $navy = [System.Drawing.ColorTranslator]::FromHtml("#0f2d52")
  $navyLight = [System.Drawing.ColorTranslator]::FromHtml("#1a3d6b")
  $white = [System.Drawing.Color]::White

  $bitmap = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $graphics.Clear([System.Drawing.Color]::Transparent)

  $padding = [float]([Math]::Round($size * 0.08))
  $radius = [float]([Math]::Round($size * 0.20))
  $side = [float]($size - (2.0 * $padding))
  $rect = New-Object System.Drawing.RectangleF($padding, $padding, $side, $side)

  $path = $null
  $brush = $null
  $textBrush = $null
  $font = $null
  try {
    $path = New-RoundedRectPath -rect $rect -radius $radius
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $navy, $navyLight, 315.0)
    $graphics.FillPath($brush, $path)

    $fontSize = [float]([Math]::Round($size * 0.52))
    $font = New-Object System.Drawing.Font("Georgia", $fontSize, ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel))
    $textBrush = New-Object System.Drawing.SolidBrush($white)

    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center

    $textRect = New-Object System.Drawing.RectangleF(0, [float]($size * 0.02), $size, $size)
    $graphics.DrawString("H", $font, $textBrush, $textRect, $format)
  } finally {
    if ($path) { $path.Dispose() }
    if ($brush) { $brush.Dispose() }
    if ($textBrush) { $textBrush.Dispose() }
    if ($font) { $font.Dispose() }
    if ($graphics) { $graphics.Dispose() }
  }

  return $bitmap
}

function Save-Png($bitmap, [string]$path) {
  $dir = Split-Path -Parent $path
  if ($dir -and !(Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
  $bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
}

function Save-Ico($bitmap, [string]$path) {
  $dir = Split-Path -Parent $path
  if ($dir -and !(Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }

  $hIcon = $bitmap.GetHicon()
  $icon = [System.Drawing.Icon]::FromHandle($hIcon)
  try {
    $fs = [System.IO.File]::Open($path, [System.IO.FileMode]::Create)
    try {
      $icon.Save($fs)
    } finally {
      $fs.Dispose()
    }
  } finally {
    $icon.Dispose()
  }
}

$root = Split-Path -Parent $PSScriptRoot
$publicDir = Join-Path $root "public"

$bitmap256 = New-HitieIconBitmap -size 256
try {
  Save-Ico -bitmap $bitmap256 -path (Join-Path $publicDir "favicon.ico")
} finally {
  $bitmap256.Dispose()
}

$bitmap32 = New-HitieIconBitmap -size 32
try {
  Save-Png -bitmap $bitmap32 -path (Join-Path $publicDir "favicon-32.png")
} finally {
  $bitmap32.Dispose()
}

$bitmap180 = New-HitieIconBitmap -size 180
try {
  Save-Png -bitmap $bitmap180 -path (Join-Path $publicDir "apple-touch-icon.png")
} finally {
  $bitmap180.Dispose()
}

Write-Output "Generated: public/favicon.ico, public/favicon-32.png, public/apple-touch-icon.png"
