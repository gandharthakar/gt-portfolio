const basePath = 'images/company-experience-logos';
const plchimg = 'we-placeholder.jpg';
const pimgPath = `${basePath}/${plchimg}`;

const genTags = (expTags) => {
    if (!expTags.length) return '';

    const tags = expTags.map((item) => `<div class="exp-item-bchg-item">${item}</div>`).join('');
    return `<div class="expsec-pad3"><div class="exp-item-bchg">${tags}</div></div>`
}

const prepHTML = (data) => {
    data.map((exp) => {
        const template = `
            <div class="exp-item">
                <div class="exp-item-box">
                    <div class="exp-item-bimg">
                        <img src="${exp.company_logo ? `${basePath}/${exp.company_logo}` : pimgPath}" width="100px" height="100px" alt="${exp.experience_title}" />
                    </div>
                    <div class="exp-item-bcont">
                        ${exp.experience_tags.length ? genTags(exp.experience_tags) : ''}
                        <div class="expsec-pad4">
                            <h1 class="expsecb-title">
                                ${exp.experience_title}
                            </h1>
                        </div>
                        <div>
                            <div class="expsecb-infogrid">
                                <div class="expsecb-igleg">
                                    Company Name :
                                </div>
                                <div class="expsecb-igdt">
                                    ${exp.company_name}
                                </div>
                            </div>
                            <div class="expsecb-infogrid">
                                <div class="expsecb-igleg">
                                    Company Website :
                                </div>
                                <div class="expsecb-igdt">
                                    <a href="${exp.compnay_website}" title="Visit Site" class="web-link"
                                        target="_blank">
                                        <div class="base">
                                            <div>Visit Site</div>
                                            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="lucide lucide-square-arrow-out-up-right">
                                                <path
                                                    d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                                                <path d="m21 3-9 9" />
                                                <path d="M15 3h6v6" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="expsecb-infogrid">
                                <div class="expsecb-igleg">
                                    Company Location :
                                </div>
                                <div class="expsecb-igdt">
                                    ${exp.company_location}
                                </div>
                            </div>
                            <div class="expsecb-infogrid">
                                <div class="expsecb-igleg">
                                    Working Experience :
                                </div>
                                <div class="expsecb-igdt">
                                    ${exp.working_experience}
                                </div>
                            </div>
                            <div class="expsecb-infogrid">
                                <div class="expsecb-igleg">
                                    Working Period :
                                </div>
                                <div class="expsecb-igdt">
                                    ${exp.working_period}
                                </div>
                            </div>
                            <div class="expsecb-infogrid">
                                <div class="expsecb-igleg">
                                    Designation / Post :
                                </div>
                                <div class="expsecb-igdt">
                                    ${exp.designation_post}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.querySelector("#work-exp").insertAdjacentHTML("afterbegin", template);
    })
}

const getExperiences = async () => {
    try {
        const resp = await fetch('data/experiences.json');
        const data = await resp.json();
        prepHTML(data);
    } catch (error) {
        console.log(error.message);
    }
}


// --> START DOM.Ready();
$(function () {
    // Call function to see experience.
    getExperiences();
}); // <-- End od DOM.Ready();