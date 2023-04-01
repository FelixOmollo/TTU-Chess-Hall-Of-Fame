const context = {
    portfolio:[
        {
            image: 'Chess-Club Logo.jpg',
            name: 'Udi',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'
        },
        {
            image:'Chess-Club Logo.jpg',
            name:'Nick',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'
        },
        {
            image:'Chess-Club Logo.jpg',
            name:'Boni',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'
        },
        {
            image:'Chess-Club Logo.jpg',
            name:'Gich',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'
        },
        {
            image:'Chess-Club Logo.jpg',
            name:'Bern bern',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'

        },
        {
            image:'Chess-Club Logo.jpg',
            name:'Emily',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'

        },
        {
            image:'Chess-Club Logo.jpg',
            name:'Clinton',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'

        },
        {
            image:'Chess-Club Logo.jpg',
            name:'Danson',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'

        },
        {
            image:'Chess-Club Logo.jpg',
            name:'Senetor',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'

        },
        {
            image:'Chess-Club Logo.jpg',
            name:'YG',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'

        },
        {
            image:'Chess-Club Logo.jpg',
            name:'Kevoh',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'

        },
        {
            image:'Chess-Club Logo.jpg',
            name:'Shamir',
            strengths: '',
            personality: 'Bernard alias berben, tsunami and meli was one of the adent chess players at the institution. He graduated with a Bsc in Analytical Chemistry.'

        }
    ]
};
context.portfolio.forEach(item =>{
    item.strengths = `${item.personality}`;
});

const templateElement = document.getElementById('templateHB');
const templateSource = templateElement.innerHTML;
const template = Handlebars.compile(templateSource);
const compiledHTML = template(context);

//Rendering the template onto the webpage
document.getElementById('display-players').innerHTML = compiledHTML;


//On mouseover and out
const hiddenInfo = document.querySelector('.strengths');

const displayPersonality = (event) => {
    hiddenInfo.style.display = 'block';
    hiddenInfo.style.width = '200px';
};

const returnToDefault = (event) => {
    hiddenInfo.style.display = '';
    hiddenInfo.style.width = '';
}

//adding event listener
hiddenInfo.addEventListener('mouseover', displayPersonality);
hiddenInfo.addEventListener('mouseout', returnToDefault);