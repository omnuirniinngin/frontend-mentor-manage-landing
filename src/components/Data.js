import illustration from './images/illustration-intro.svg'
import avatarAli from './images/avatar-ali.png'
import avatarAnisha from './images/avatar-anisha.png'
import avatarRichard from './images/avatar-richard.png'
import avatarShanai from './images/avatar-shanai.png'

export const sectionOne = {
    headLine: 'Bring everyone together to build better ',
    subHeadline: 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
    img: illustration,
    alt: 'illustration-intro',
}

export const sectionTwo = {
    headLine: 'What’s different about Manage?',
    subHeadline: 'Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.',
    start: 'start',

    content : [
        {
            id: 1,
            title: 'Track company-wide progress',
            description: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
        },
        {
            id: 2,
            title: 'Advanced built-in reports',
            description: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
        },
        {
            id: 3,
            title: 'Everything you need in one place',
            description: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents Manage offers an all-in-one team productivity solution.'
        }
    ]
    
}

export const sectionThree = {
    headLine: 'What they’ve said',
    feedback : [
        {   
            image: avatarAli,
            id: 1,
            name: 'Anisha Li',
            comment: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
        },
        {
            image: avatarAnisha,
            id: 2,
            name: 'Ali Bravo',
            comment: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
        },
        {
            image: avatarRichard,
            id: 3,
            name: 'Richard Watts',
            comment: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
        },
        {
            image: avatarShanai,
            id: 4,
            name: 'Shanai Gough',
            comment: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
        }
    ],
    button: 'Get Started'
}

export const footer = {
    headLine: 'Simplify how your team works today.',
    button: 'Get Started',
}