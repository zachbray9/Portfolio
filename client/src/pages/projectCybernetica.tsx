import Card from "../components/common/card";

export default function ProjectCybernetica() {
    return (
        <div className="flex flex-col gap-12">
            <h3 className="font-semibold">Project Cybernetica</h3>

            <Card className="p-6">
                <div className="grid grid-rows-2 grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <h5>Role</h5>
                        <p className="text-sm sm:text-base font-light">Programmer</p>
                    </div>
                    <div className="flex flex-col">
                        <h5>Genre</h5>
                        <p className="text-sm sm:text-base font-light">First Person Shooter</p>
                    </div>
                    <div className="flex flex-col">
                        <h5>Year</h5>
                        <p className="text-sm sm:text-base font-light">2022</p>
                    </div>
                    <div className="flex flex-col">
                        <h5>Platform</h5>
                        <p className="text-sm sm:text-base font-light">PC</p>
                    </div>
                </div>
            </Card>

            <div className="flex flex-col gap-2">
                <h5>Description</h5>
                <p className="font-light">
                    Project Cybernetica is a 3D first person shooter created in Unreal Engine 5 in which you are a mercenary in an apocalyptic
                    city called Sariya, a weapons development city. The city suddenly fell off the grid and lost contact with its people. Your goal is to infiltrate
                    the city and discover what secrets lie within. The project was created with a small development team for my UCF Game Workshop class.
                </p>
            </div>

            <iframe className="aspect-video max-w-[560px]" src="https://www.youtube.com/embed/pyLSuHHFSkg?si=ARY_9u3GFwehAQ62" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <div className="flex flex-col gap-4">
                <h5>My Contributions</h5>

                <ul className="list-disc ml-5">
                    <li className="gap-2 list-item pb-4">
                        <h6>Automated Performance Testing</h6>
                        <p className="font-light pb-2">
                            I created an automated performance test that iterated through a set of cameras that were placed on a sublevel. The test would have each camera
                            do a two second CPU/GPU trace and generate a .utrace file to be put into Unreal Insights, Unreal Engine's built in profiling tool, for review. 
                        </p>
                        <a className="inline-block w-auto" href="/projectCybernetica/Unreal Insights Screenshot.PNG" target="_blank">
                            <img className='aspect-video max-w-[200px]' src='/projectCybernetica/Unreal Insights Screenshot.PNG'/>
                        </a>
                    </li>

                    <li className="list-item pb-4">
                        <h6>Invisibility Cloak Mechanic</h6>
                        <p className="font-light pb-2">
                            I developed an invisibility cloak mechanic that applies a translucent material to the player and makes them undetectable by enemy AI using event 
                            dispatchers. The cloak has a ten second timer.
                        </p>
                        <a className="inline-block w-auto" href="/projectCybernetica/Cloak Gif.gif" target="_blank">
                            <img className='aspect-video max-w-[200px]' src='/projectCybernetica/Cloak Gif.gif'/>
                        </a>
                    </li>

                    <li className="list-item pb-4">
                        <h6>AI Strafe Mechanic</h6>
                        <p className="font-light pb-2">
                            I created a strafing mechanic for the enemies to move around in an attempt to dodge the player's gunfire.
                        </p>
                        <a className="inline-block w-auto" href="/projectCybernetica/Striker Strafe Gif.gif" target="_blank">
                            <img className='aspect-video max-w-[200px]' src='/projectCybernetica/Striker Strafe Gif.gif'/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}