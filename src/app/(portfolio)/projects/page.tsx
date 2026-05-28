import { ContentBlock } from "@/components/ContentBlock"
import Image from "next/image";

export default function Projects() {
    return (
        <div className="max-h-full grow-0 mx-auto space-y-20">
            <div className="flex justify-between w-full">
                <ContentBlock title="Kollaby" className="flex-[2]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis inventore dignissimos doloribus voluptas molestiae animi id quas autem non quo maxime excepturi aliquid repellat maiores, veritatis cupiditate? Libero, dicta. Porro consectetur id ut quis vitae aut ducimus facilis architecto modi error? Architecto non temporibus veritatis. Velit error, voluptate harum, officiis facilis quo totam quibusdam reprehenderit ab tenetur, quaerat dolorum. Amet pariatur beatae quidem velit natus? Quibusdam suscipit commodi hic dicta nulla cum consequatur facilis id doloremque ullam. Nihil porro rem ipsum quaerat, temporibus dolor laudantium suscipit nemo consequuntur alias? Iure quam quae dolorum, odio, totam reiciendis eveniet omnis provident cupiditate, repudiandae fugiat assumenda natus doloribus modi voluptatum. Labore rem culpa nihil neque odio iusto reiciendis quis, aperiam nam voluptate?
                </ContentBlock>
                <Image src="/images/dummy_pic.jpeg" width={150} height={150} alt="dummy picture" className="object-contain flex-1" />
            </div>
            <div className="flex justify-between w-full relative">
                <ContentBlock title="Plan-it" className="flex-[2]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis inventore dignissimos doloribus voluptas molestiae animi id quas autem non quo maxime excepturi aliquid repellat maiores, veritatis cupiditate? Libero, dicta. Porro consectetur id ut quis vitae aut ducimus facilis architecto modi error? Architecto non temporibus veritatis. Velit error, voluptate harum, officiis facilis quo totam quibusdam reprehenderit ab tenetur, quaerat dolorum. Amet pariatur beatae quidem velit natus? Quibusdam suscipit commodi hic dicta nulla cum consequatur facilis id doloremque ullam. Nihil porro rem ipsum quaerat, temporibus dolor laudantium suscipit nemo consequuntur alias? Iure quam quae dolorum, odio, totam reiciendis eveniet omnis provident cupiditate, repudiandae fugiat assumenda natus doloribus modi voluptatum. Labore rem culpa nihil neque odio iusto reiciendis quis, aperiam nam voluptate?
                </ContentBlock>
                <Image src="/images/dummy_pic.jpeg" width={150} height={150} alt="dummy picture" className="object-contain flex-1" />
            </div>
            <div className="flex justify-between w-full relative last-of-type:mb-10">
                <ContentBlock title="Brazil Dental Care" className="flex-[2]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis inventore dignissimos doloribus voluptas molestiae animi id quas autem non quo maxime excepturi aliquid repellat maiores, veritatis cupiditate? Libero, dicta. Porro consectetur id ut quis vitae aut ducimus facilis architecto modi error? Architecto non temporibus veritatis. Velit error, voluptate harum, officiis facilis quo totam quibusdam reprehenderit ab tenetur, quaerat dolorum. Amet pariatur beatae quidem velit natus? Quibusdam suscipit commodi hic dicta nulla cum consequatur facilis id doloremque ullam. Nihil porro rem ipsum quaerat, temporibus dolor laudantium suscipit nemo consequuntur alias? Iure quam quae dolorum, odio, totam reiciendis eveniet omnis provident cupiditate, repudiandae fugiat assumenda natus doloribus modi voluptatum. Labore rem culpa nihil neque odio iusto reiciendis quis, aperiam nam voluptate?
                </ContentBlock>
                <Image src="/images/dummy_pic.jpeg" width={150} height={150} alt="dummy picture" className="object-contain self-center flex-1" />
            </div>
        </div>
    );
}