import { RxDownload } from "react-icons/rx";
import LinkButton from "../components/ui/LinkButton";
import Card from "../components/common/card";

export default function GravityOfSilence() {
    return (
        <div className="flex flex-col gap-12">
            <h3 className="font-semibold">The Gravity of Silence</h3>

            <Card className="flex flex-col gap-6 p-6">
                <div className="grid grid-rows-2 grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <h5>Role</h5>
                        <p className="text-sm sm:text-base font-light">Lead Programmer</p>
                    </div>
                    <div className="flex flex-col">
                        <h5>Genre</h5>
                        <p className="text-sm sm:text-base font-light">Third Person Puzzle Game</p>
                    </div>
                    <div className="flex flex-col">
                        <h5>Year</h5>
                        <p className="text-sm sm:text-base font-light">2020</p>
                    </div>
                    <div className="flex flex-col">
                        <h5>Platform</h5>
                        <p className="text-sm sm:text-base font-light">PC, Xbox, Playstation</p>
                    </div>
                </div>

                <LinkButton
                    href='https://leonard-garcia.itch.io/gravity-of-silence'
                    label="Go to Download"
                    RightIcon={RxDownload}
                    className="w-40 bg-bg-light dark:bg-bg-dark hover:bg-slate-200 dark:hover:bg-gray-800 text-black dark:text-white text-sm p-2 border border-slate-300 dark:border-gray-800 ring-0"
                />

            </Card>

            <div className="flex flex-col gap-2">
                <h5>Description</h5>
                <p className="font-light">
                    The Gravity of Silence is a third person puzzle solving game where the user must utilize their gravity altering abilities to complete levels
                    and regain control of their space ship from its rogue AI. This project was made with a small development team for my UCF Game Production class.
                    I was the only programmer on the project, so everything that involved code was developed by me.
                </p>
            </div>

            <iframe className="aspect-video max-w-[560px]" src="https://www.youtube.com/embed/gGB6lE-0YYg?si=33MzdiPV-OVmoFYW" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <div className="flex flex-col gap-4">
                <h5>My Contributions</h5>

                <ul className="list-disc ml-5">
                    <li className="gap-2 list-item pb-4">
                        <h6>Gravity Mechanics</h6>
                        <p className="font-light pb-2">
                            I created the gravity switch and gravity gun mechanics. The gravity switch allowed the player to reverse gravity so all items in the room fall up instead
                            of down. The gravity gun mechanic allowed the player to grab, manipulate, and throw objects.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                            <a className="inline-block w-auto" href="/gravityOfSilence/Gravity Switch Gif.gif" target="_blank">
                                <img className='aspect-video max-w-[200px]' src='/gravityOfSilence/Gravity Switch Gif.gif' />
                            </a>
                            <a className="inline-block w-auto" href="/gravityOfSilence/Gravity Gun Gif.gif" target="_blank">
                                <img className='aspect-video max-w-[200px]' src='/gravityOfSilence/Gravity Gun Gif.gif' />
                            </a>
                        </div>
                    </li>

                    <li className="list-item pb-4">
                        <h6>Puzzle Mechanics</h6>
                        <p className="font-light pb-2">
                            I developed all of the puzzles in the game which included a bunch of small mechanics such as teleporting objects, having objects stick to walls, and
                            opening doors based on conditions.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <a className="inline-block w-auto" href="/gravityOfSilence/LaserPuzzleGif.gif" target="_blank">
                                <img className='aspect-video max-w-[200px]' src='/gravityOfSilence/LaserPuzzleGif.gif' />
                            </a>
                            <a className="inline-block w-auto" href="/gravityOfSilence/PowerCorePuzzleGif.gif" target="_blank">
                                <img className='aspect-video max-w-[200px]' src='/gravityOfSilence/PowerCorePuzzleGif.gif' />
                            </a>
                            <a className="inline-block w-auto" href="/gravityOfSilence/ShootingRangePuzzleGif.gif" target="_blank">
                                <img className='aspect-video max-w-[200px]' src='/gravityOfSilence/ShootingRangePuzzleGif.gif' />
                            </a>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}