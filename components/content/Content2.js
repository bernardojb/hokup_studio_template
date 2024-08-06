// import {
//   CloudArrowUpIcon,
//   LockClosedIcon,
//   ServerIcon,
// } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "",
  },
  {
    name: "SSL certificates.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "",
  },
  {
    name: "Database backups.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: "",
  },
];

export default function Content1({ background, image, subtitle, title, text }) {
  return (
    <div className={`${background} overflow-hidden py-24 sm:py-32`}>
      <div className="px-4">
        <div className="grid grid-cols-12 gap-x-4 gap-y-16 sm:gap-y-20 lg:mx-0">
          <div className="col-span-4 col-start-2 lg:pr-8 lg:pt-4">
            <div className="">
              <h2 className="font-primary font-semibold leading-7 text-primary-default">
                {subtitle}
              </h2>
              <p className="mt-2 font-primary text-3xl font-bold tracking-tight text-typo-primary sm:text-4xl">
                {title}
              </p>
              <p className="mt-6 font-secondary text-lg leading-8 text-typo-secondary">
                {text}
              </p>
              <dl className="mt-10  space-y-8 text-base leading-7 text-gray-600">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-secondary font-semibold text-primary-default">
                      {/* <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        /> */}
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline font-secondary text-typo-secondary">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="col-span-6 col-start-7">
            <img
              alt="Product screenshot"
              src={image}
              width={2432}
              height={1442}
              className="w-[48rem] rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
