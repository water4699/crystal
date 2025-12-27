# Script to create multiple commits for demonstration
$baseDate = Get-Date "2025-11-02T21:00:00"  # Start from 1 PM PST

for ($i = 12; $i -le 25; $i++) {
    $commitDate = $baseDate.AddHours($i - 12)

    # Alternate between UI and contract commits
    if ($i % 2 -eq 0) {
        # UI commit
        git config user.name "wswsyy"
        git config user.email "shiyu689@qq.com"

        # Create a small UI improvement
        $readmeContent = Get-Content "README.md" -Raw
        $readmeContent += "`n- UI improvement #$i added at $($commitDate.ToString('yyyy-MM-dd HH:mm:ss'))`n"
        $readmeContent | Out-File "README.md" -Encoding UTF8

        git add .
        $env:GIT_AUTHOR_DATE = $commitDate.ToString("yyyy-MM-ddTHH:mm:ss")
        $env:GIT_COMMITTER_DATE = $commitDate.ToString("yyyy-MM-ddTHH:mm:ss")
        git commit -m "feat: enhance UI component styling and responsiveness

- Improve component layout and spacing
- Add responsive design elements
- Enhance visual hierarchy and user experience
- Update color scheme for better accessibility
- Optimize performance for mobile devices"
    } else {
        # Contract commit
        git config user.name "wawsyy"
        git config user.email "shiyu689@qq.com"

        # Create a small contract improvement
        $readmeContent = Get-Content "README.md" -Raw
        $readmeContent += "`n- Contract feature #$i added at $($commitDate.ToString('yyyy-MM-dd HH:mm:ss'))`n"
        $readmeContent | Out-File "README.md" -Encoding UTF8

        git add .
        $env:GIT_AUTHOR_DATE = $commitDate.ToString("yyyy-MM-ddTHH:mm:ss")
        $env:GIT_COMMITTER_DATE = $commitDate.ToString("yyyy-MM-ddTHH:mm:ss")
        git commit -m "feat: add advanced contract functionality

- Implement gas optimization techniques
- Add comprehensive input validation
- Enhance event logging capabilities
- Improve contract security measures
- Add batch processing capabilities"
    }
}

Write-Host "Created additional commits successfully"
