import "../../styles/components/socialnetworks.sass"
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/alex-lopes-092587197/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/Alexlr10" },
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/alexlr131/" }
]

const SocialNetWorks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link}
                className="social-btn"
                id={network.name}
                key={network.name}
                target="_blank"
                rel="noopener noreferrer"
            >
                {network.icon}
            </a>
        ))}
    </section>
}

export default SocialNetWorks
