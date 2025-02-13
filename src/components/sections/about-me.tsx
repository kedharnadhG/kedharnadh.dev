import Image from "next/image";
import KedharFullPose from "/public/images/kedhar.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={KedharFullPose}
              alt="Full pose of Kedhar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>

          <Typography>
            I&apos;m a passionate{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              self-proclaimed Software Engineer
            </Link>{" "}
            specializing in full-stack development (React.js & Node.js) with a
            focus on data-driven problem-solving, delivering impactful software
            solutions that enhance user experience, system efficiency, and
            scalability.
          </Typography>

          <Typography>
            I began my journey as a web developer in 2023, and since then,
            I&apos;ve continued to grow as a Software Engineer, taking on new
            challenges and learning the latest technologies along the way.
          </Typography>

          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end-to-end, from ideation all the way to development.
          </Typography>

          <Typography>
            When I&apos;m not in full-on developer mode, you can find me on
            YouTube, witnessing the journey of early startups or enjoying some
            free time. You can also follow me on{" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>

          <Typography>Finally, some quick bits about me:</Typography>

          {/* Updated List Section */}
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <li>B.Tech. in Computer Science & Engineering (9.1 CGPA)</li>
              <li>Avid learner</li>
              <li>A passionate aspiring Software Engineer</li>
            </ul>
          </div>

          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
