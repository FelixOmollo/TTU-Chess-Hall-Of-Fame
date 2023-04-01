const context = {
    portfolio:[
        {
            image: 'Chess-Club Logo.jpg',
            description: 'Udi',
            strengths: 'Nani was in Taita Taaveta University between 2018 & 2023. It is approximated that he had a rating of 1900.'
        },
        {
            image:'Chess-Club Logo.jpg',
            description:'Nick',
            strengths: 'Nani was in Taita Taaveta University between 2018 & 2023. It is approximated that he had a rating of 1900.'
        },
        {
            image:'Chess-Club Logo.jpg',
            description:'Boni',
            strengths: 'Nani was in Taita Taaveta University between 2018 & 2023. It is approximated that he had a rating of 1900.'
        },
        {
            image:'Chess-Club Logo.jpg',
            description:'Gich',
            strengths: 'Nani was in Taita Taaveta University between 2018 & 2023. It is approximated that he had a rating of 1900.'
        },
        {
            image:'Chess-Club Logo.jpg',
            description:'Bern bern',
            strengths: 'Nani was in Taita Taaveta University between 2018 & 2023. It is approximated that he had a rating of 1900.'

        },
        {
            image:'Chess-Club Logo.jpg',
            description:'Emily',
            strengths: 'Nani was in Taita Taaveta University between 2018 & 2023. It is approximated that he had a rating of 1900.'

        },
        {
            image:'Chess-Club Logo.jpg',
            description:'Clinton',
            strengths: 'Nani was in Taita Taaveta University between 2018 & 2023. It is approximated that he had a rating of 1900.'

        },
        {
            image:'Chess-Club Logo.jpg',
            description:'Danson',
            strengths: 'Nani was in Taita Taaveta University between 2018 & 2023. It is approximated that he had a rating of 1900.'

        },
        {
            image:'Chess-Club Logo.jpg',
            description:'Senetor',
            strengths: 'Nani was in Taita Taaveta University between 2018 & 2023. It is approximated that he had a rating of 1900.'

        },
        {
            image:'Chess-Club Logo.jpg',
            description:'YG',
            strengths: 'Nani was in Taita Taaveta University between 2018 & 2023. It is approximated that he had a rating of 1900.'

        },
        {
            image:'Chess-Club Logo.jpg',
            description:'Kevoh',
            strengths: 'Nani was in Taita Taaveta University between 2018 & 2023. It is approximated that he had a rating of 1900.'

        }
    ]
};

const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHTML = template(context);

//Rendering the template onto the webpage
document.getElementById('display-players').innerHTML = compiledHTML;
