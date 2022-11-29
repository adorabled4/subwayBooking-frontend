import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {BLOG_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'by dhx_';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'blog',
          title: "dhx_'blog",
          href: BLOG_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> dhx_ GitHub
            </>
          ),
          href: GITHUB_LINK,
          blankTarget: true,
        },
      ]}
    />
  );
};

// const Footer: React.FC = () => {
//   const defaultMessage = '鱼皮出品';
//   const currentYear = new Date().getFullYear();
//   return (
//     <DefaultFooter
//       copyright={`${currentYear} ${defaultMessage}`}
//       links={[
//         {
//           key: 'planet',
//           title: '知识星球',
//           href: BLOG_LINK,
//           blankTarget: true,
//         },
//         {
//           key: 'codeNav',
//           title: '编程导航',
//           href: 'https://www.code-nav.cn',
//           blankTarget: true,
//         },
//         {
//           key: 'github',
//           title: <><GithubOutlined/> 鱼皮 GitHub</>,
//           href: 'https://github.com/liyupi',
//           blankTarget: true,
//         },
//
//       ]}
//     />
//   );
// };

export default Footer;
