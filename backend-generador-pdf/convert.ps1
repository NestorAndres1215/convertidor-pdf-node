param(
  [string]$inputPath,
  [string]$outputPath
)

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open($inputPath)
$doc.SaveAs($outputPath, 17)
$doc.Close()
$word.Quit()
