let groups = [
    {
        id: 1,
        name: 'Дети',
        groups: [
            {
                id: 11,
                name: 'Все дети',
                groups: [],
            },
            {
                id: 2,
                name: 'С инвалидностью',
                groups: [],
            },
            {
                id: 3,
                name: 'ВИЧ-положительные',
                groups: [],
            },
            {
                id: 4,
                name: 'Мигранты и беженцы',
                groups: [],
            },
            {
                id: 5,
                name: 'Имеющие редкие заболевания',
                groups: [
                    {
                        id: 6,
                        name: 'Заболевания опорно-двигательного аппарата',
                        groups: [],
                    },
                    {
                        id: 7,
                        name: 'Буллёзный эпидермолиз',
                        groups: [],
                    },
                ],
            },

        ],
    },
    {
        id: 8,
        name: 'Подростки',
        groups: [
            {
                id: 9,
                name: 'Бездомные',
                groups: [],
            },
            {
                id: 10,
                name: 'С инвалидностью',
                groups: [],
            },
        ],
    },
    {
        id: 11,
        name: 'Женщины',
        groups: [],
    },
    {
        id: 12,
        name: 'Взрослые',
        groups: [],
    },
    {
        id: 13,
        name: 'Пожилые',
        groups: [],
    },
    {
        id: 14,
        name: 'Семьи',
        groups: [],
    },

];


let group = document.querySelector('.block-groups');
let butt = document.querySelector('.but-save-and-next');
let blockSelect = document.querySelector('.block-select-else');
let panelGroups = document.querySelector('.panel-groups');
let butSelect = document.querySelector('.but-select-else');



butSelect.addEventListener('click', function (e) {
    if (panelGroups.classList.contains('open')) {
        panelGroups.classList.remove('open');
    } else {
        panelGroups.classList.add('open');
        let asd = document.querySelectorAll('.panel-group-list, .panel-group-un-list');
        asd.forEach(df => {
            df.classList.remove('open');
        })
    }
});
document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        panelGroups.classList.remove('open');
    }
});



let countGroup = groups.length;
for (var i = 0; i < countGroup; i++) {
    var names = groups[i].name;
    let div = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = names;
    div.append(span);
    panelGroups.append(div);
    div.classList.add('list');
    div.setAttribute('data-id', groups[i].id);

    let groupUnList = groups[i].groups;
    const image = document.createElement('img');
    image.src = './img/arrow.svg';
    image.alt = 'arrow';
    if (groupUnList[0]) {
        span.append(image);
    }



    let panelGroupsLists = document.createElement('ul');
    panelGroupsLists.classList.add('panel-group-list');

    let backList = document.createElement('li');
    let spanBackList = document.createElement('span');
    spanBackList.innerHTML = names;
    backList.append(spanBackList);


    backList.classList.add('sel-list-group');
    panelGroupsLists.append(backList);
    backList.addEventListener('click', function () {
        panelGroupsLists.classList.remove('open');
    });
    for (var b = 0; b < groupUnList.length; b++) {
        let namesGG = groups[i].groups[b].name;
        let divGG = document.createElement('li');
        let spanUn = document.createElement('span');
        spanUn.innerHTML = namesGG;
        divGG.append(spanUn);
        // un
        divGG.classList.add('list-un');
        divGG.setAttribute('data-id', `${groups[i].groups[b].id}` + `,` + `${groups[i].id}`);
        panelGroupsLists.append(divGG);
        div.append(panelGroupsLists);




        let panelUnGroupsLists = document.createElement('ul');
        panelUnGroupsLists.classList.add('panel-group-un-list');

        let backListUn = document.createElement('li');
        let spanUnBackList = document.createElement('span');
        spanUnBackList.innerHTML = namesGG;
        backListUn.append(spanUnBackList);

        backListUn.classList.add('sel-list-group');
        panelUnGroupsLists.append(backListUn);
        backListUn.addEventListener('click', function () {
            panelUnGroupsLists.classList.remove('open');
        });
        let groupUnUnList = groups[i].groups[b].groups;
        const image = document.createElement('img');
        image.src = './img/arrow.svg';
        image.alt = 'arrow';
        if (groupUnUnList[0]) {
            spanUn.append(image);
        }

        for (var c = 0; c < groupUnUnList.length; c++) {
            let namesUnGG = groups[i].groups[b].groups[c].name;
            let divUnGG = document.createElement('li');
            let spanUnUn = document.createElement('span');
            spanUnUn.innerHTML = namesUnGG;
            divUnGG.append(spanUnUn);

            divUnGG.classList.add('list-un-un');
            divUnGG.setAttribute('data-id', `${groups[i].groups[b].groups[c].id}` + `,` + `${groups[i].groups[b].id}` + `,` + `${groups[i].id}`);
            panelUnGroupsLists.append(divUnGG);
            divGG.append(panelUnGroupsLists);
        }



        spanUn.addEventListener('click', function () {
            if (!groupUnUnList.isArray) {
                if (panelUnGroupsLists.classList.contains('open')) {
                    panelUnGroupsLists.classList.remove('open');
                } else {
                    let panelUnGroupList = document.querySelectorAll('.panel-group-un-list');
                    panelUnGroupList.forEach(pGLUn => {
                        pGLUn.classList.remove('open');
                    });
                    panelUnGroupsLists.classList.add('open');
                }
            }
        })

    }


    span.addEventListener('click', function () {
        if (groupUnList[0]) {
            if (panelGroupsLists.classList.contains('open')) {
                panelGroupsLists.classList.remove('open');
            } else {
                let panelGroupList = document.querySelectorAll('.panel-group-list');
                panelGroupList.forEach(pGL => {
                    pGL.classList.remove('open');
                });
                panelGroupsLists.classList.add('open');
            }
        }
    })


}







let listPanelM = document.querySelectorAll('.panel-groups .list');
listPanelM.forEach(Panel => {
    Panel.addEventListener('click', function () {
        if (!Panel.querySelector('ul')) {
            if (this.classList.contains('select')) {
                let aa = document.querySelectorAll('.select-list-block');
                aa.forEach(ele => {
                    if (`<span class="texts"><span>${this.innerText}</span><i class="icon-close"></i></span>` == ele.firstElementChild.firstElementChild.outerHTML) {
                        ele.remove();
                    }
                });
                this.classList.remove('select');
            } else {
                let selectListDiv = document.createElement('div');
                let selectList = document.createElement('p');
                selectList.innerHTML = `<span class="texts"><span>${this.innerText}</span><i class="icon-close"></i></span>`;
                selectList.classList.add('select-list');
                selectList.setAttribute('data-id', this.getAttribute("data-id"));
                selectListDiv.classList.add('select-list-block');
                selectListDiv.append(selectList);
                group.append(selectListDiv);
                this.classList.add('select');
                let butClose = document.querySelectorAll('.icon-close');
                butClose.forEach(but => {
                    but.addEventListener('click', function () {
                        but.parentElement.parentElement.parentElement.remove();
                        Panel.classList.remove('select');
                    });
                });
            }
        }
    })
})






let listPanelGroup = document.querySelectorAll('.panel-group-list .list-un');
listPanelGroup.forEach(listPanel => {
    listPanel.addEventListener('click', function () {
        if (!listPanel.querySelector('ul')) {



            if (listPanel.innerText == 'Все дети') {
                let df = this.parentNode.querySelectorAll('.list-un')
                for (h = 0; h < df.length; h++) {


                    if (!df[h].querySelector('ul')) {
                        if (df[h].classList.contains('select')) {
                            let aa = document.querySelectorAll('.select-list-block');
                            aa.forEach(ele => {
                                if (`<span class="texts"><span>${df[h].parentElement.firstElementChild.innerText}</span><span>${df[h].innerText}</span><i class="icon-close"></i></span>` == ele.firstElementChild.firstElementChild.outerHTML) {
                                    ele.remove();
                                }
                            });
                            df[h].classList.remove('select');
                        } else {
                            let selectListDivUn = document.createElement('div');
                            let selectListUn = document.createElement('p');
                            selectListUn.innerHTML = `<span class="texts"><span>${df[h].parentElement.firstElementChild.innerText}</span><span>${df[h].innerText}</span><i class="icon-close"></i></span>`;
                            selectListUn.classList.add('select-list');
                            selectListUn.setAttribute('data-id', df[h].getAttribute("data-id"));
                            selectListDivUn.classList.add('select-list-block');
                            selectListDivUn.append(selectListUn);
                            group.append(selectListDivUn);
                            df[h].classList.add('select');
                            let butCloseAl = document.querySelectorAll('.icon-close');
                            butCloseAl.forEach(but => {
                                let par = df[h];
                                but.addEventListener('click', function () {
                                    but.parentElement.parentElement.parentElement.remove();
                                    par.classList.remove('select');
                                });
                            });
                        }
                    } else {
                        // un-un
                        let dfUn = this.parentNode.querySelectorAll('.list-un-un')
                        for (hUn = 0; hUn < dfUn.length; hUn++) {
                            if (dfUn[hUn].classList.contains('select')) {
                                let aa = document.querySelectorAll('.select-list-block');
                                aa.forEach(ele => {
                                    if (`<span class="texts"><span>${dfUn[hUn].parentElement.parentElement.parentElement.firstElementChild.innerText}</span><span>${dfUn[hUn].parentElement.firstElementChild.innerText}</span><span>${dfUn[hUn].innerText}</span><i class="icon-close"></i></span>` == ele.firstElementChild.firstElementChild.outerHTML) {
                                        ele.remove();
                                    }
                                });
                                dfUn[hUn].classList.remove('select');
                            } else {
                                let selectListDivUn = document.createElement('div');
                                let selectListUn = document.createElement('p');
                                selectListUn.innerHTML = `<span class="texts"><span>${dfUn[hUn].parentElement.parentElement.parentElement.firstElementChild.innerText}</span><span>${dfUn[hUn].parentElement.firstElementChild.innerText}</span><span>${dfUn[hUn].innerText}</span><i class="icon-close"></i></span>`;
                                selectListUn.classList.add('select-list');
                                selectListUn.setAttribute('data-id', dfUn[hUn].getAttribute("data-id"));
                                selectListDivUn.classList.add('select-list-block');
                                selectListDivUn.append(selectListUn);
                                group.append(selectListDivUn);
                                dfUn[hUn].classList.add('select');
                                let butCloseAl = document.querySelectorAll('.icon-close');
                                butCloseAl.forEach(but => {
                                    let par = dfUn[hUn];
                                    but.addEventListener('click', function () {
                                        but.parentElement.parentElement.parentElement.remove();
                                        par.classList.remove('select');
                                    });
                                });
                            }
                        }
                    }


                }
            }



            if (this.classList.contains('select')) {
                let aa = document.querySelectorAll('.select-list-block');
                aa.forEach(ele => {
                    if (`<span class="texts"><span>${this.parentElement.firstElementChild.innerText}</span><span>${this.innerText}</span><i class="icon-close"></i></span>` == ele.firstElementChild.firstElementChild.outerHTML) {
                        ele.remove();
                    }
                });
                this.classList.remove('select');
            }
            else {
                let selectListDiv = document.createElement('div');
                let selectList = document.createElement('p');
                selectList.innerHTML = `<span class="texts"><span>${this.parentElement.firstElementChild.innerText}</span><span>${this.innerText}</span><i class="icon-close"></i></span>`;
                selectList.classList.add('select-list');
                selectList.setAttribute('data-id', this.getAttribute("data-id"));
                selectListDiv.classList.add('select-list-block');
                selectListDiv.append(selectList);
                group.append(selectListDiv);


                this.classList.add('select');
                let butClose = document.querySelectorAll('.icon-close');
                butClose.forEach(but => {
                    but.addEventListener('click', function () {
                        but.parentElement.parentElement.parentElement.remove();
                        listPanel.classList.remove('select');
                    });
                });
            }
        }
    })
})







let listPanelGroupUn = document.querySelectorAll('.panel-group-list .list-un-un');
listPanelGroupUn.forEach(listPanelUn => {
    listPanelUn.addEventListener('click', function () {
        if (!listPanelUn.querySelector('ul')) {
            if (this.classList.contains('select')) {
                let aa = document.querySelectorAll('.select-list-block');
                aa.forEach(ele => {
                    if (`<span class="texts"><span>${this.parentElement.parentElement.parentElement.firstElementChild.innerText}</span><span>${this.parentElement.firstElementChild.innerText}</span><span>${this.innerText}</span><i class="icon-close"></i></span>` == ele.firstElementChild.firstElementChild.outerHTML) {
                        ele.remove();
                    }
                });
                this.classList.remove('select');
            } else {
                let selectListDiv = document.createElement('div');
                let selectList = document.createElement('p');
                selectList.innerHTML = `<span class="texts"><span>${this.parentElement.parentElement.parentElement.firstElementChild.innerText}</span><span>${this.parentElement.firstElementChild.innerText}</span><span>${this.innerText}</span><i class="icon-close"></i></span>`;

                selectList.classList.add('select-list');
                selectList.setAttribute('data-id', this.getAttribute("data-id"));
                selectListDiv.classList.add('select-list-block');
                selectListDiv.append(selectList);
                group.append(selectListDiv);
                this.classList.add('select');
                let butClose = document.querySelectorAll('.icon-close');
                butClose.forEach(but => {
                    but.addEventListener('click', function () {
                        but.parentElement.parentElement.parentElement.remove();
                        listPanelUn.classList.remove('select');
                    });
                });
            }
        }
    })
})






butt.addEventListener('click', function () {
    let arr = [];
    let gfg = document.querySelectorAll('.select-list');
    gfg.forEach(ff => {
        arr.push(ff.getAttribute("data-id"));
    })
    console.log('groups:' + arr);
})
