import React from 'react'


function Projects(){
    const photos = [
        {
            name: 'Employee Tracker',
            category: 'employee-tracker',
            description: 'An application to keep track of different departments and edit teams'
        },
        {
            name: 'Find the Brew',
            category: 'employee-tracker',
            description: 'An application to find local breweries'
        },
        {
            name: 'Namaste Fit',
            category: 'namaste-fit',
            description: 'An application to help you find your center and better your health through yoga'
        },
        {
            name: 'Password Generator',
            category: 'password-generator',
            description: 'An application that helps tailor a secure and random password'
        },
        {
            name: 'README Generator',
            category: 'readme-generator',
            description: 'An application that makes markdown files simplified'
        },
        {
            name: 'Team Generator',
            category: 'team-generator',
            description: 'An application that allows you to build your own teams'
        }
    ]
    return (
        <section className='flex-container'>
            {photos.map((project, i) => (
                <div className='flex-item'>
                    <img src={require(`../assets/img/${i}.png`).default} 
                    alt={project.description}
                    key={project.name}
                    className='img-thumbnail'
                    />
                </div>
            ))}
        </section>
    )
} 

export default Projects