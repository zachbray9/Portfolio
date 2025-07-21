import Card from "../common/card";
import UCFLogo from '../../assets/UCF Logo.png'

export default function EducationSection() {
    return (
        <section className="w-full flex flex-col gap-4">
            <h3 className="font-semibold text-2xl sm:text-3xl">Education</h3>

            <Card>
                <ul className="mx-10 border-l border-gray-200 dark:border-gray-800">
                    <li className="relative ml-10 py-4 flex flex-col gap-2">
                        <div className="absolute -left-16 top-4 bg-black h-12 w-12 rounded-full flex items-center justify-center">
                            <img src={UCFLogo} />
                        </div>

                        <time className="text-xs text-muted-light dark:text-muted-dark">
                            <span>August 2018</span>
                            <span> - </span>
                            <span>May 2022</span>
                        </time>

                        <h5>University of Central Florida</h5>

                        <p className="text-muted-light dark:text-muted-dark">BA in Digital Media on the Programming Path</p>

                        <ul className="ml-5 list-disc list-outside">
                            <li>
                                <p>Graduated with a minor in Computer Science</p>
                            </li>
                            <li>
                                <p>Earned a 3.8 unweighted GPA</p>
                            </li>
                            <li>
                                <p>3x recipient of the Dean's Honor List award</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Card>

        </section>
    )
}