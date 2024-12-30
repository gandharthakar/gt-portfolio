const prepHTML = (data) => {
    data.reverse().map((skill) => {
        const template = `
            <div class="skills-grid-item">
                <div class="sgipad-1">
                    <h5 class="sgi-title">
                        ${skill.skills_section_title}
                    </h5>
                </div>
                <div class="sgi-chips-main">
                    ${skill.skills.map((item) => `<div class="skill-chip">${item}</div>`).join('')}
                </div>
            </div>
        `;
        document.querySelector("#sk-grid").insertAdjacentHTML("afterbegin", template);
    });
}

const getSkills = async () => {
    try {
        const resp = await fetch('data/skills.json');
        const data = await resp.json();
        prepHTML(data);
    } catch (error) {
        console.log(error.message);
    }
}

// --> START DOM.Ready();
$(function () {
    // Call function to see skills.
    getSkills();
}); // <-- End od DOM.Ready();