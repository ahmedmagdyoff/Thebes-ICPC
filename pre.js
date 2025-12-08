// Topics
function topics(level) {
    fetch(`data/topics/${level}.csv`).then(res => res.text()).then(text => {
        text.trim().split("\n").slice(1).forEach((line, i) => {
            const [title, tag, explanation, upsolve, practice] = line.split(",");
            document.querySelector(`#level${level}-content .weeks-grid`).innerHTML += `
                <!-- ${tag} -->
                <div class="week-card level${level}-card">
                <div class="week-header">
                    <h3 class="week-title">${title}</h3>
                    <span class="week-tag level${level}-tag">${tag}</span>
                </div>
                <div class="week-materials">
                    <a href="${explanation}" target="_blank" class="material-link">
                    <i class="fab fa-youtube"></i>
                    <span>Explanation Sessions</span>
                    </a>
                    <a href="${upsolve}" target="_blank" class="material-link">
                    <i class="fab fa-youtube"></i>
                    <span>Upsolve Sessions</span>
                    </a>
                    <a href="${practice}" target="_blank" class="material-link">
                    <i class="fas fa-link"></i>
                    <span>Practice Sheet</span>
                    </a>
                </div>
            `;
        });
    });
}

// Performers
function performers(level) {
    fetch(`data/performers/${level}.csv`).then(res => res.text()).then(text => {
        text.trim().split("\n").slice(1).forEach((line, i) => {
            const [handle, , standings, , percentage] = line.split(",");
            document.querySelector(`.level${level}-slide .performer-list`).innerHTML += `
                <!-- Rank ${i + 1} -->
                <div class="performer">
                <div class="rank rank-${i + 1}">${i + 1}</div>
                <div class="performer-info">
                    <h4>${handle}</h4>
                    <p>Solved: ${standings} Problems</p>
                </div>
                <div class="score">${percentage}</div>
                </div>
            `;
        });
    });
}