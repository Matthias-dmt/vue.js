import deploy from "../svg/deploy.svg";
import resiliency from "../svg/resiliency.svg";
import onTop from "../svg/on-top.svg";
import extensible from "../svg/extensible.svg";

export const usages = {
  deploy: {
    title: "Deploy real wolrd applications",
    paras: [
      "Qovery Engine empowers you to deploy complex applications, such as a backend, a frontend, and a database in a very simple way.",
      "Servers, networking, security, all is done by the Engine for you.",
    ],
    pict: deploy,
  },
  resiliency: {
    title: "Resiliency is key",
    paras: [
      "Qovery Engine knows when something goes wrong on the deployement of your applications. Qovery Engine is built with resiliency in mind.",
      "A transactional engine inspired by what is provided into ACID databases has been developed at the heart of the product to rollback on a consistent and working application version when something goes wrong.",
    ],
    pict: resiliency,
  },
  onTop: {
    title: "On top of the besst tools",
    paras: [
      "Qovery Engine does not reinvent the wheel. It takes advantage of the best tools in the Cloud industry, such as Kubernetes, Terraform, and Helm to manage the deployement of the infrastructure and your applications.",
      "Servers, networking, security, all is done by the Engine for you.",
    ],
    pict: onTop,
  },
  extensible: {
    title: "Extensible",
    paras: [
      "Qovery Engine is built to be highly extensible. Adding the support of a Cloud provider or a Continuous Integration platform is as simple as implementing a simple programmatic interface.",
    ],
    pict: extensible,
  },
};
