const arrayTeam = [
    {
        "imm":"img/wayne-barnett-founder-ceo.jpg",
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO"
    },

    {
        "imm":"img/angela-caroll-chief-editor.jpg",
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor"
    },

    {
        "imm":"img/walter-gordon-office-manager.jpg",
        "nome": "Walter Gordon",
        "ruolo": "Office Manager"
    },

    {
        "imm":"img/angela-lopez-social-media-manager.jpg",
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager"
    },

    {
        "imm":"img/scott-estrada-developer.jpg",
        "nome": "Scott Estrada",
        "ruolo": "Developer"
    },

    {
        "imm":"img/barbara-ramos-graphic-designer.jpg",
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer"
    },
];

console.log(arrayTeam);

let cardMember = '';

for(i = 0; i < arrayTeam.length; i++){
    cardMember +=`
    <div class="team-card">
        <div class="card-image">
            <img
                src="${arrayTeam[i].imm}"
                alt="${arrayTeam[i].imm}"
              />
        </div>
        <div class="card-text">
            <h3>${arrayTeam[i].nome}</h3>
            <p>${arrayTeam[i].ruolo}</p>
        </div>
    </div>
    `
}


