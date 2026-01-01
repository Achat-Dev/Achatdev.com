import kpl1 from "$lib/images/kepler/kpl1.png";
import nb1 from "$lib/images/nebula/nb1.jpg";
import oov1 from "$lib/images/out_of_vengeance/oov1.jpg";
import oov2 from "$lib/images/out_of_vengeance/oov2.jpg";
import oov3 from "$lib/images/out_of_vengeance/oov3.jpg";
import oov4 from "$lib/images/out_of_vengeance/oov4.jpg";
import oov5 from "$lib/images/out_of_vengeance/oov5.jpg";
import oov6 from "$lib/images/out_of_vengeance/oov6.jpg";
import ss13 from "$lib/images/the_scuffed_series/ss13.jpg";
import ss15 from "$lib/images/the_scuffed_series/ss15.jpg";
import ss17 from "$lib/images/the_scuffed_series/ss17.jpg";
import ss19 from "$lib/images/the_scuffed_series/ss19.jpg";
import ss22 from "$lib/images/the_scuffed_series/ss22.jpg";
import up01 from "$lib/images/university_projects/up01.png";
import up02 from "$lib/images/university_projects/up02.jpg";
import up03 from "$lib/images/university_projects/up03.jpg";

export interface ImageProps {
    src: string;
    alt: string;
}

export interface SocialMediaProps {
    url: string;
    name: string;
}

export interface Project {
    slug: string;
    name: string;
    description: any;
    images: ImageProps[];
};

export const projects: Project[] = [
    {
        slug: "kepler",
        name: "Kepler",
        description: `
            <p>Kepler is a programming language that I developed in C++ using <a href="https://llvm.org/" target="_blank">LLVM</a>.</p>
            <p><strong>Features</strong> (the feature set is pretty minimal because the language was developed as part of a university project):</p>
            <ul>
                <li>Compilation of a ".kpl" file as well as additional object or C++ files into a single executable</li>
                <li>Basic type system</li>
                <li>A custom runtime</li>
                <li>Gargabe Collection via "libgc"</li>
                <li>Easter eggs (I had fun developing those :D)</li>
            </ul>
            <div style="display: flex; justify-content: center; align-items: center;">
                <a href="https://github.com/Achat-Dev/Kepler" target="_blank";">View on GitHub</a>
            </div>
        `,
        images: [
            {
                src: kpl1,
                alt: "The faculty of 10 programmed in Kepler"
            }
        ]
    },
    {
        slug: "nebula",
        name: "Nebula",
        description: `
            <p>A game engine written in C# that uses OpenGL via Silk.NET for rendering (at the moment it is more of a render engine though, because there is very little game logic code implemented).</p>
            <p><strong>Features:</strong></p>
            <ul>
                <li>Entity-Component-System</li>
                <li>Physically based rendering</li>
                <li>Dynamic directional and omnidirectional shadows</li>
                <li>Cascaded shadow maps</li>
                <li>Material system</li>
                <li>Model, shader, skybox and texture loading</li>
            </ul>
            <div style="display: flex; justify-content: center; align-items: center;">
                <a href="https://github.com/Achat-Dev/Nebula" target="_blank";">View on GitHub</a>
            </div>
        `,
        images: [
            {
                src: nb1,
                alt: "A demo scene rendered in real time with Nebula, showing two spheres and a cube floating slightly above the ground next to a wall with three point lights circling around them. The skybox is a road next to a forest."
            }
        ]
    },
    {
        slug: "out-of-vengeance",
        name: "Out of Vengeance",
        description: `
            <p>An unfinished game I developed in Unity with C#, inspired by Hollow Knight and God of War. I never finished the project due to scoping issues and no clear vision of the finished product.
            <br>Nevertheless, it had some pretty cool combat mechanics, so here is a little <a href="https://www.youtube.com/watch?v=tE_R-34G-Uc" target="_blank">demo video</a>.</p>
            <p><strong>Features:</strong></p>
            <ul>
                <li>God of War like combat system</li>
                <li>Three unique weapons with unique magic attacks</li>
                <li>Absorb blood from the environment to fill your heals</li>
                <li>Artefact system: Link artefacts to a weapon to grant it unique effects, sometimes even changing the weapon"s playstyle</li>
            </ul>`,
        images: [
            {
                src: oov1,
                alt: "The player of Out of Vengeance absorbing blood from the environment"
            },
            {
                src: oov4,
                alt: "The base area of Out of Vengeance, a bright fir forest"
            },
            {
                src: oov6,
                alt: "The player of Out of Vengeance during combat in a castle while using a magical explosion enhanced by an artefact of the Blood Priest"
            },
            {
                src: oov5,
                alt: "An underwater cave in Out of Vengeance"
            },
            {
                src: oov2,
                alt: "A raided throne room in Out of Vengeance"
            },
            {
                src: oov3,
                alt: "The beaten-up player of Out of Vengenace trying to escape from a prison while a guard stands in front of the elevator to the next floor"
            }
        ]
    },
    {
        slug: "the-scuffed-series",
        name: "The Scuffed Series",
        description: `
        <p>This is a series of really small video games I made as a learning experience with Unity. Most of these games were made in a single day and focused on different mechanics so I could try out different things.</p>
        <p>The best entries are
            <a href="https://achat.itch.io/the-scuffed-series-15" target="_blank">no. 15</a>,
            <a href="https://achat.itch.io/the-scuffed-series-17" target="_blank">no. 17</a> and
            <a href="https://achat.itch.io/the-scuffed-series-19" target="_blank">no. 19</a>.
        </p>
        <div style="display: flex; justify-content: center; align-items: center;">
            <a href="https://achat.itch.io/" target="_blank">View on itch.io</a>
        </div>`,
        images: [
            {
                src: ss15,
                alt: 'The player of "The Scuffed Series 15 - Bloodlust of a Gladiator", located in a bloodstained area and fights to the death with other gladiators'
            },
            {
                src: ss17,
                alt: 'The player of "The Scuffed Series 17 - Inside the Nebula", fighting in his spaceship in outer space against a mother ship and three smaller ships'
            },
            {
                src: ss19,
                alt: 'The garden of "The Scuffed Series 19 - Gardening around Explosives" during the half-time of the game'
            },
            {
                src: ss13,
                alt: 'The player of "The Scuffed Series 13 - Shotgun in the Dark" next to the heard while being chased by a dozen enemies'
            },
            {
                src: ss22,
                alt: 'A formation in "The Scuffed Series 22 - Rapid Guerrilla Busters" defending the core from incoming enemies'
            }
        ]
    },
    {
        slug: "university-projects",
        name: "University projects",
        description: `
        <p>During my studies, I participated in three game projects where I took on various tasks.</p>
        <div style="margin-bottom: 1.5em">
            <p><strong>Chess But It's A Fighting Game</strong></p>
            <p>It's chess, but you have to defeat your opponent's piece in a 1v1 side-scrolling twin-stick shooter. This game was my my idea. I was the project lead and also responsible for the combat system, the graphics (except for the pixel art graphics), the VFX and SFX.</p>
            <div style="display: flex; justify-content: center; align-items: center;">
                <a href="https://hdm-stuttgart.de/stage/projekt_detail/projekt_details?projekt_ID=3605" target="_blank">View on the HdM Stage</a>
            </div>
        </div>
        <div style="margin-bottom: 1.5em">
            <p><strong>IGNY MAYSTRA</strong></p>
            <p>A 1v1 VR magic battle in which you draw runes to cast spells. I made the VFX and SFX.</p>
            <div style="display: flex; justify-content: center; align-items: center;">
                <a href="https://hdm-stuttgart.de/stage/projekt_detail/projekt_details?projekt_ID=3882" target="_blank">View on the HdM Stage</a>
            </div>
        </div>
        <div>
            <p><strong>F.M.L. Forced Magic Labour</strong></p>
            <p>This is an isometric roguelike with a focus on gathering materials and brewing potions. I was the Technical Director of this project. I set up the game's infrastructure, planned its architecture, coordinated a team of seven engineers and provided technical support when needed.</p>
            <div style="display: flex; justify-content: center; align-items: center;">
                <a href="https://hdm-stuttgart.de/stage/projekt_detail/projekt_details?projekt_ID=4294" target="_blank">View on the HdM Stage</a>
            </div>
        </div>`,
        images: [
            {
                src: up01,
                alt: 'Cover artwork for the game "Chess But Is\'s A Fighting Game", which shows a peaceful chessboard on the left half and a bloody platform with two chess pieces shooting at each other on the right half'
            },
            {
                src: up02,
                alt: 'Cover artwork for the game "IGNY MAYSTRA", showing the player character from behind in front of a forest at night while casting a spell'
            },
            {
                src: up03,
                alt: 'Cover artwork for the game "F.M.L Forced Magic Labour, showing the player character from behind in front of an old stone arch in a forest"'
            }
        ]
    }
];

export const socialMedia: SocialMediaProps[] = [
    {
        url: "https://github.com/Achat-Dev",
        name: "GitHub"
    },
    {
        url: "https://achat.itch.io/",
        name: "itch.io"
    }
];
