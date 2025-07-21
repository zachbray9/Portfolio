import Card from "../common/card";
import UCFLogo from '../../assets/UCF Logo.png'
import NSSLogo from '../../assets/NSSLogo.png'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function EducationSection() {
    return (
        <section className="w-full flex flex-col gap-4">
            <Tabs defaultValue="work" className="w-full">
                <TabsList className="w-full bg-surface-light dark:bg-surface-dark">
                    <TabsTrigger value="work" className="border-none">Work experience</TabsTrigger>
                    <TabsTrigger value="education" className="border-none">Education</TabsTrigger>
                </TabsList>

                <TabsContent value="work">
                    <Card>
                        <ul className="mx-10 border-l border-gray-200 dark:border-gray-800">
                            <li className="relative ml-10 py-4 flex flex-col gap-2">
                                <div className="absolute -left-16 top-4 bg-white h-12 w-12 rounded-full flex items-center justify-center overflow-hidden">
                                    <img src={NSSLogo} alt="NSS Logo" />
                                </div>

                                <time className="text-xs text-muted-light dark:text-muted-dark">
                                    <span>December 2024</span>
                                    <span> - </span>
                                    <span>Present</span>
                                </time>

                                <h5 className="text-base font-semibold">Freelance Frontend Developer</h5>

                                <p className="text-sm text-muted-light dark:text-muted-dark">National Space Society</p>

                                <ul className="ml-5 list-disc list-outside">
                                    <li className="text-sm text-gray-700 dark:text-gray-200">
                                        <p>Developed a fast, scalable website for a worldwide contest celebrating the 100th anniversary of Robert Goddard, reaching an estimated 5000+ participants.</p>
                                    </li>
                                    <li className="text-sm text-gray-700 dark:text-gray-200">
                                        <p>Designed an intuitive, visually striking UI using ReactJS, Tailwind CSS, and ShadCn, improving user engagement by 30% through enhanced navigation and responsiveness.</p>
                                    </li>
                                    <li className="text-sm text-gray-700 dark:text-gray-200">
                                        <p>Coordinated directly with key members of the National Space Society to gather contest requirements, ensuring the website effectively supported their vision and goals.</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Card>
                </TabsContent>

                <TabsContent value="education">
                    <Card>
                        <ul className="mx-10 border-l border-gray-200 dark:border-gray-800">
                            <li className="relative ml-10 py-4 flex flex-col gap-2">
                                <div className="absolute -left-16 top-4 bg-black h-12 w-12 rounded-full flex items-center justify-center">
                                    <img src={UCFLogo} alt="UCF Logo" />
                                </div>

                                <time className="text-xs text-muted-light dark:text-muted-dark">
                                    <span>August 2018</span>
                                    <span> - </span>
                                    <span>May 2022</span>
                                </time>

                                <h5 className="text-base font-semibold">University of Central Florida</h5>

                                <p className="text-sm text-muted-light dark:text-muted-dark">BA in Digital Media on the Programming Path</p>

                                <ul className="ml-5 list-disc list-outside">
                                    <li className="text-sm text-gray-700 dark:text-gray-200">
                                        <p>Graduated with a minor in Computer Science</p>
                                    </li>
                                    <li className="text-sm text-gray-700 dark:text-gray-200">
                                        <p>Earned a 3.8 unweighted GPA</p>
                                    </li>
                                    <li className="text-sm text-gray-700 dark:text-gray-200">
                                        <p>3x recipient of the Dean's Honor List award</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    )
}