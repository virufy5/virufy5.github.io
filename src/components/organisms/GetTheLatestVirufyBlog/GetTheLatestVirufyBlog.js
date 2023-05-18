
import Title from "~/components/atoms/Title/Title"
import Button from "~/components/atoms/button/Button"

export default function GetTheLatestVirufyBlog() {

    return (
        <div className="flex flex-col items-center bg-[#EEEEEE]">
            <div className="max-w-[1300px] w-[100vw] mt-14 xl:mt-0 flex flex-col xl:flex-row items-center xl:justify-between">
                <div className="flex xl:hidden">
                    <Title
                        H="h6"
                        Text="Get the latest in Virufy’s Health Blog"
                        TitleClassProps="text-center"
                    />
                </div>
                <div className="hidden xl:flex">
                    <Title
                        H="h5tepsHome"
                        Text="Get the latest in Virufy’s Health Blog"
                        TitleClassProps="text-center"
                    />
                </div>
                <div className="mb-8 px-7 mt-7 w-full max-w-[1000px] xl:w-1/3">
                    <input type="name" id="name" className="focus:border-none focus:ring-2 focus:outline-none focus:ring-blue-500 shadow-sm bg-white border text-gray-900 text-smlock w-full p-2.5 border-gray-400" required></input>
                </div>
                <div className="flex flex-col justify-center items-center mb-14 xl:mb-0">
                    <Button size="medium" type="primary" path="#" label="Sign Up" />
                </div>
            </div>
        </div >
    )
}