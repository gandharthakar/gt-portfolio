
const basePath = 'images/work-projects-thumbs';
const plchimg = 'work-placeholder.jpg';
const pimgPath = `${basePath}/${plchimg}`;

const getTags = (eorkTags) => {
    if (!eorkTags.length) return '';

    const tags = eorkTags.map((item) => `<div class="wktbpngdit-tagsgd-item">${item}</div>`).join('');
    return `<div class="wktbpngdit-tagsgd">${tags}</div>`;
}

const getGithubLink = (gtlink) => {
    return `
    <div>
        <a href="${gtlink}" title="Github" class="wktbpngdit-ctalink" target="_blank">
            <div class="base">
                <div>Github</div>
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-square-arrow-out-up-right">
                    <path
                        d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                    <path d="m21 3-9 9" />
                    <path d="M15 3h6v6" />
                </svg>
            </div>
        </a>
    </div>
    `;
}

const getDeploymentLink = (deplink) => {
    return `
    <div>
        <a href="${deplink}" title="Visit Site" class="wktbpngdit-ctalink" target="_blank">
            <div class="base">
                <div>Visit Site</div>
                <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-square-arrow-out-up-right">
                    <path
                        d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                    <path d="m21 3-9 9" />
                    <path d="M15 3h6v6" />
                </svg>
            </div>
        </a>
    </div>
    `;
}

const prepHTML = (selector, data) => {
    data.reverse().map((item) => {
        const template = `
            <div class="wktab-pangrd-item">
                <div class="inner-box">
                    <div>
                        <div class="wktbpngdit-imgcnt">
                            <a href="#" title="${item.work_title}" target="_blank">
                                <img src="${item.work_thumb_image ? `${basePath}/final/${item.work_thumb_image}` : pimgPath}"
                                    width="388px" height="193px" alt="${item.work_title}" />
                            </a>
                        </div>
                        ${item.work_tags.length ? getTags(item.work_tags) : ''}
                        <div class="wktbpngdit-pad-1">
                            <h2 class="wktbpngdit-title">
                                ${item.work_title}
                            </h2>
                        </div>
                        <div class="wktbpngdit-pad-2">
                            ${item.work_description ? `<p class="wktbpngdit-dscrtxt">${item.work_description}</p>` : ''}
                        </div>
                    </div>
                    <div class="wktbpngdit-ctagd">
                        ${item.work_github_link ? getGithubLink(item.work_github_link) : ''}
                        ${item.work_deployment_link ? getDeploymentLink(item.work_deployment_link) : ''}
                    </div>
                </div>
            </div>
        `;
        document.querySelector(selector).insertAdjacentHTML("afterbegin", template);
    })
}

const getWork = async () => {
    try {
        const resp = await fetch('data/work.json');
        const data = await resp.json();

        const perWk = "#personal-work .wktab-pangrd";
        const comWk = "#commercial-work .wktab-pangrd";

        prepHTML(perWk, data.personal_work);
        prepHTML(comWk, data.commercial_work);
    } catch (error) {
        console.log(error.message);
    }
}

$(function () {

    // Call function to see work.
    getWork();

    // Change Work Tabs On Click.
    $('.js-work-tabs').on('click', function () {
        $('.js-work-tabs').removeClass('active');
        $(this).addClass('active');

        $('.js-work-panel').hide();
        let curr_panel = $(this).attr("data-show-panel");
        $(curr_panel).fadeIn();
    });

}); // End of $( document ).ready() Function.