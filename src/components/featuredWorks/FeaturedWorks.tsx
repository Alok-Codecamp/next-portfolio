import { div } from "framer-motion/client"
import Image from "next/image"
// https://i.ibb.co.com/bjszDHjf/about-page.png
// https://i.ibb.co.com/3YfBH10v/add-car.png
// https://i.ibb.co.com/8g1VFTBc/admin-dashboard.png
// https://i.ibb.co.com/hRqj0FNL/all-cars-page.png
// https://i.ibb.co.com/qMwGkjsk/contact-page.png
// https://i.ibb.co.com/ymytkgLV/fetured-items.png
// https://i.ibb.co.com/21wGtqZm/footer.png
// https://i.ibb.co.com/JF3wj6V3/motion-Era-home-Page.png
// https://i.ibb.co.com/hJ1xnXR4/order-management.png
// https://i.ibb.co.com/zWDc2Mv6/profile-management.png
// https://i.ibb.co.com/FbJJydzG/registration-page.png
// https://i.ibb.co.com/tpFgjwFJ/update-car.png
export const FeaturedWorks = ({ darkmode }: { darkmode: boolean }) => {
    return (
        <div className={`${darkmode ? 'bg-white/10 backdrop-blur-lg' : 'bg-[#f0e5f8]'} w-96 p-2 rounded-2xl shadow-lg border border-white/20 text-center my-8 mx-4 py-6 `}>
            <div className="w-fit ml-auto mr-auto">
                <Image
                    src={"https://i.ibb.co.com/JF3wj6V3/motion-Era-home-Page.png"}
                    alt="image"
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <h4>Title: Motion Era is a E-Car shop</h4>
                <p> Key Features: Authentication, Authorization, Easy Payment, role based Dashboard for user and admin </p>
                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi enim suscipit impedit amet esse, sunt ullam quasi vitae cum quae! Placeat nostrum impedit ducimus cumque quidem aspernatur eius maxime.</p>
                <p>Technologies Used: React, Nodejs Express js .....</p>
            </div>
            <div>
                <button>Learn More</button>
                <button>Visit Online</button>
            </div>
        </div>
    )
}