export const projects: Project[] = [
    {
        slug: 'Nebula',
        name: 'Nebula',
        description: `
            <p>This game engine is written in C# and uses OpenGL via Silk.NET (at the moment it is more of a render engine though, because there is very little game logic code implemented).</p>
            <p><strong>Features:</strong></p>
            <ul>
                <li>Entity-Component-System</li>
                <li>Physically based rendering</li>
                <li>Dynamic directional and omnidirectional shadows</li>
                <li>Cascaded shadow maps</li>
                <li>Material system</li>
                <li>Model, shader, skybox and texture loading</li>
            </ul>
            <div style='display: flex; justify-content: center; align-items: center;'>
                <a href='https://github.com/Achat-Dev/Nebula' target='_blank';'>View on GitHub</a>
            </div>`,
        images: [
            {
                src: 'images/nebula/nb1.jpg',
                alt: 'A demo scene rendered in real time with Nebula, showing two spheres and a cube floating slightly above the ground next to a wall with three point lights circling around them. The skybox is a road next to a forest.'
            }
        ]
    },
    {
        slug: 'Out_of_Vengeance',
        name: 'Out of Vengeance',
        description: `
            <p>An unfinished game I developed in Unity with C#, inspired by Hollow Knight and God of War. I never finished the project due to scoping issues and no clear vision of the finished product.
            <br>Nevertheless, it had some pretty cool combat mechanics, so here is a little <a href='https://www.youtube.com/watch?v=tE_R-34G-Uc' target='_blank'>demo video</a>.</p>
            <p><strong>Features:</strong></p>
            <ul>
                <li>God of War like combat system</li>
                <li>Three unique weapons with unique magic attacks</li>
                <li>Absorb blood from the environment to fill your heals</li>
                <li>Artefact system: Link artefacts to a weapon to grant it unique effects, sometimes even changing the weapon's playstyle</li>
            </ul>`,
        images: [
            {
                src: 'images/out_of_vengeance/oov1.jpg',
                alt: 'The player of Out of Vengeance absorbing blood from the environment'
            },
            {
                src: 'images/out_of_vengeance/oov4.jpg',
                alt: 'The base area of Out of Vengeance, a bright fir forest'
            },
            {
                src: 'images/out_of_vengeance/oov6.jpg',
                alt: 'The player of Out of Vengeance during combat in a castle while using a magical explosion enhanced by an artefact of the Blood Priest'
            },
            {
                src: 'images/out_of_vengeance/oov5.jpg',
                alt: 'An underwater cave in Out of Vengeance'
            },
            {
                src: 'images/out_of_vengeance/oov2.jpg',
                alt: 'A raided throne room in Out of Vengeance'
            },
            {
                src: 'images/out_of_vengeance/oov3.jpg',
                alt: 'The beaten-up player of Out of Vengenace trying to escape from a prison while a guard stands in front of the elevator to the next floor'
            }
        ]
    },
    {
        slug: 'Backfisch_Editor',
        name: 'Backfisch Editor',
        description: `
        <p>A text editor I developed some time ago because I was sick of the lack of built-in functionality in other text editors.
        <p><strong>Features:</strong></p>
        <ul>
            <li>Open files are displayed side by side on a continuous canvas rather than in individual tabs</li>
            <li>Built-in mode for creating colour themes with a live preview on the side</li>
            <li>Support for the completion of snippets (called "keywords") with a built-in mode for creating them</li>
            <li>Text files can be switched between "Normal file" mode and "Code" mode, with the latter including some quality of life features such as auto-completion of brackets etc.</li>
        </ul>
        <div style='display: flex; justify-content: center; align-items: center;'>
            <a href='https://achat.itch.io/backfisch-editor' target='_blank'>View on itch.io</a>
        </div>`,
        images: [
            {
                src: 'images/backfisch_editor/be1.jpg',
                alt: 'Two open files next to each other in the Backfish Editor with the file search open on the right-hand side'
            },
            {
                src: 'images/backfisch_editor/be2.jpg',
                alt: 'A showcase of the Backfisch Editor\'s built-in colour theme creator with a live preview on the left-hand side'
            },
            {
                src: 'images/backfisch_editor/be3.jpg',
                alt: 'Several open keyword files next to each other in the Backfisch Editor, which showcases the built-in keyword completion system'
            }
        ]
    },
    {
        slug: 'The_Scuffed_Series',
        name: 'The Scuffed Series',
        description: `
        <p>This is a series of really small video games I made as a learning experience with Unity. Most of these games were made in a single day and focused on different mechanics so I could try out different things.</p>
        <p>The best entries are
            <a href="https://achat.itch.io/the-scuffed-series-15" target="_blank">no. 15</a>,
            <a href="https://achat.itch.io/the-scuffed-series-17" target="_blank">no. 17</a> and
            <a href="https://achat.itch.io/the-scuffed-series-19" target="_blank">no. 19</a>.
        </p>
        <div style='display: flex; justify-content: center; align-items: center;'>
            <a href='https://achat.itch.io/' target='_blank'>View on itch.io</a>
        </div>`,
        images: [
            {
                src: 'images/the_scuffed_series/ss15.jpg',
                alt: 'The player of "The Scuffed Series 15 - Bloodlust of a Gladiator", located in a bloodstained area and fights to the death with other gladiators'
            },
            {
                src: 'images/the_scuffed_series/ss17.jpg',
                alt: 'The player of "The Scuffed Series 17 - Inside the Nebula", fighting in his spaceship in outer space against a mother ship and three smaller ships'
            },
            {
                src: 'images/the_scuffed_series/ss19.jpg',
                alt: 'The garden of "The Scuffed Series 19 - Gardening around Explosives" during the half-time of the game'
            },
            {
                src: 'images/the_scuffed_series/ss13.jpg',
                alt: 'The player of "The Scuffed Series 13 - Shotgun in the Dark" next to the heard while being chased by a dozen enemies'
            },
            {
                src: 'images/the_scuffed_series/ss22.jpg',
                alt: 'A formation in "The Scuffed Series 22 - Rapid Guerrilla Busters" defending the core from incoming enemies'
            }
        ]
    }
];

export const socialMedia: SocialMediaProps[] = [
    {
        url: 'https://github.com/Achat-Dev',
        name: 'GitHub'
    },
    {
        url: 'https://achat.itch.io/',
        name: 'itch.io'
    }
];
