import { FaWhatsapp } from "react-icons/fa";
import "../../styles/components/InformationContainer.sass";
import { AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <FaWhatsapp id="phone-icon" />
                <div>
                    <h3>Telefone/WhatsApp</h3>
                    <p>(38)997259740</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>Email</h3>
                    <p>alexlr10@hotmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <p>Turmalina / MG</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer
