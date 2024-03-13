
import { CustomLink } from "../CustomLink/CustomLink"
import "./Footer.css"

export const Footer = () => {

    return (
        <div className="footerDesign">

            <CustomLink
                title={"contact"}
                destination={"/contact"}
            />

            <CustomLink
                title={"social"}
                destination={"/social"}
            />

        </div>
    )
}