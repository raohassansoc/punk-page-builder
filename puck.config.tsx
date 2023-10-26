import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string };
  Paragraph: { text: string };
  NavBar: { tab1: string, tab2: string, tab3: string, link1: string, link2: string, link3: string };
  NavBar_Blue: { tab1: string, tab2: string, tab3: string, link1: string, link2: string, link3: string };
  NavBar_Two: { logo: string, tab1: string, tab2: string, tab3: string, link1: string, link2: string, link3: string };
  NavBar_Three_blue: {
    logo: string, tab1: string, tab2: string, tab3: string, link1: string, link2: string, link3: string,
    Button_One: string, Button_Two: string
  };
  Hero: { mainHeading: string, paragraph: string, buttonText: string },
  Footer: { websiteName: string, email: string }
  Footer_Two: {
    Logo: string, Link_1: string, Link_2: string, Link_3: string, Link_4: string, Link_5: string,
    Link_6: string
  },
  Footer_Two_Blue: {
    Logo: string, Link_1: string, Link_2: string, Link_3: string, Link_4: string, Link_5: string,
    Link_6: string
  },
  // packages: {
  //   heading: string
  // }
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title} hi</h1>
        </div>
      ),
    },
    Paragraph: {
      fields: {
        text: { type: "text" },
      },
      defaultProps: {
        text: "Paragraph",
      },
      render: ({ text }) => (
        <div style={{ padding: 64 }}>
          <p>{text}</p>
        </div>
      ),
    },
    NavBar: {
      fields: {
        tab1: { type: "text" },
        link1: { type: "text" },
        tab2: { type: "text" },
        link2: { type: "text" },
        tab3: { type: "text" },
        link3: { type: "text" },
      },
      defaultProps: {
        tab1: "Home",
        tab2: "About",
        tab3: "Contact",
        link1: "#",
        link2: "#",
        link3: "#",
      },
      render: ({ tab1, tab2, tab3, link1, link2, link3 }) => (
        <div style={{
          backgroundColor: '#333',
          color: '#fff',
          textAlign: 'center',
          padding: '20px 0',
        }}>
          <a href={link1} style={{
            color: '#fff',
            textDecoration: 'none',
            margin: '0 10px',
            fontWeight: 'bold',
          }}>{tab1}</a>
          <a href={link2} style={{
            color: '#fff',
            textDecoration: 'none',
            margin: '0 10px',
            fontWeight: 'bold',
          }}>{tab2}</a>
          <a href={link3} style={{
            color: '#fff',
            textDecoration: 'none',
            margin: '0 10px',
            fontWeight: 'bold',
          }}>{tab3}</a>
        </div>
      )
    },
    NavBar_Blue: {
      fields: {
        tab1: { type: "text" },
        link1: { type: "text" },
        tab2: { type: "text" },
        link2: { type: "text" },
        tab3: { type: "text" },
        link3: { type: "text" },
      },
      defaultProps: {
        tab1: "Home",
        tab2: "About",
        tab3: "Contact",
        link1: "#",
        link2: "#",
        link3: "#",
      },
      render: ({ tab1, tab2, tab3, link1, link2, link3 }) => (
        <div style={{
          backgroundColor: '#0158ad',
          color: '#fff',
          textAlign: 'center',
          padding: '20px 0',
        }}>
          <a href={link1} style={{
            color: '#fff',
            textDecoration: 'none',
            margin: '0 10px',
            fontWeight: 'bold',
          }}>{tab1}</a>
          <a href={link2} style={{
            color: '#fff',
            textDecoration: 'none',
            margin: '0 10px',
            fontWeight: 'bold',
          }}>{tab2}</a>
          <a href={link3} style={{
            color: '#fff',
            textDecoration: 'none',
            margin: '0 10px',
            fontWeight: 'bold',
          }}>{tab3}</a>
        </div>
      )
    },
    NavBar_Two: {
      fields: {
        logo: { type: "text" },
        tab1: { type: "text" },
        link1: { type: "text" },
        tab2: { type: "text" },
        link2: { type: "text" },
        tab3: { type: "text" },
        link3: { type: "text" },
      },
      defaultProps: {
        logo: "Logo",
        tab1: "Home",
        tab2: "About",
        tab3: "Contact",
        link1: "#",
        link2: "#",
        link3: "#",
      },
      render: ({ logo, tab1, tab2, tab3, link1, link2, link3 }) => (
        <div style={{
          backgroundColor: '#333',
          color: '#fff',
          padding: '15px',
          textAlign: 'center',
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <a href="#" style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '24px',
            textDecoration: 'none',
            marginRight: '20px',
          }}>{logo}</a>
          <div style={{ display: "flex", gap: 25 }}>
            <a href={link1} style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 10px',
              fontWeight: 'bold',
            }}>{tab1}</a>
            <a href={link2} style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 10px',
              fontWeight: 'bold',
            }}>{tab2}</a>
            <a href={link3} style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 10px',
              fontWeight: 'bold',
            }}>{tab2}</a>
          </div>
        </div>
      )
    },
    NavBar_Three_blue: {
      fields: {
        logo: { type: "text" },
        tab1: { type: "text" },
        link1: { type: "text" },
        tab2: { type: "text" },
        link2: { type: "text" },
        tab3: { type: "text" },
        link3: { type: "text" },
        Button_One: { type: "text" },
        Button_Two: { type: "text" },
      },
      defaultProps: {
        logo: "Logo",
        tab1: "Home",
        tab2: "About",
        tab3: "Contact",
        link1: "#",
        link2: "#",
        link3: "#",
        Button_One: "Get Started",
        Button_Two: "Get More",

      },
      render: ({ logo, tab1, tab2, tab3, link1, link2, link3, Button_One, Button_Two }) => (
        <div style={{
          backgroundColor: '#0158ad',
          color: '#0158ad',
          padding: '15px',
          textAlign: 'center',
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <a href="#" style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '24px',
            textDecoration: 'none',
            marginRight: '20px',
          }}>{logo}</a>
          <div style={{ display: "flex" }}>
            <a href={link1} style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 10px',
              fontWeight: 'bold',
            }}>{tab1}</a>
            <a href={link2} style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 10px',
              fontWeight: 'bold',
            }}>{tab2}</a>
            <a href={link3} style={{
              color: '#fff',
              textDecoration: 'none',
              margin: '0 10px',
              fontWeight: 'bold',
            }}>{tab3}</a>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <a href="#" style={{
              border: "1px solid #90caf980", color: '#fff', padding: '8px 10px', fontSize: '18px',
              borderRadius: '4px', textDecoration: 'none', display: 'inline-block'
            }}>{Button_One}</a>
            <a href="#" style={{
              backgroundColor: '#FF4136', color: '#fff', padding: '8px 10px', fontSize: '18px',
              borderRadius: '4px', textDecoration: 'none', display: 'inline-block'
            }}>{Button_Two}</a>
          </div>
        </div>
      )
    },
    Hero: {
      fields: {
        mainHeading: { type: "text" },
        paragraph: { type: "text" },
        buttonText: { type: "text" },
      },
      defaultProps: {
        mainHeading: "Welcome to My Website",
        paragraph: "Explore and discover amazing content.",
        buttonText: "Get Started"
      },
      render: ({ mainHeading, paragraph, buttonText }) => (
        <div style={{ backgroundColor: '#0074D9', color: '#fff', padding: '64px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>{mainHeading}</h1>
          <p style={{ fontSize: '20px' }}>{paragraph}</p>
          <a href="#" style={{ backgroundColor: '#FF4136', color: '#fff', padding: '12px 24px', fontSize: '18px', borderRadius: '4px', textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>{buttonText}</a>
        </div>
      )
    },
    Footer: {
      fields: {
        websiteName: { type: "text" },
        email: { type: "text" },
      },
      defaultProps: {
        websiteName: "Your Website Name",
        email: "your@email.com"
      },
      render: ({ websiteName, email }) => (
        <div style={{
          backgroundColor: '#333',
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
          display: "flex",
          justifyContent: "space-evenly"
        }}>
          <p>&copy; {new Date().getFullYear()} {websiteName}</p>
          <p>Contact: {email}</p>
        </div>
      )
    },
    Footer_Two: {
      fields: {
        Logo: { type: "text" },
        Link_1: { type: "text" },
        Link_2: { type: "text" },
        Link_3: { type: "text" },
        Link_4: { type: "text" },
        Link_5: { type: "text" },
        Link_6: { type: "text" },
      },
      defaultProps: {
        Logo: "Logo",
        Link_1: "Home",
        Link_2: "About",
        Link_3: "Services",
        Link_4: "Contact",
        Link_5: "Privacy Policy",
        Link_6: "Terms of Service",


      },
      render: ({ Logo, Link_1, Link_2, Link_3, Link_4, Link_5, Link_6 }) => (
        <div style={{
          backgroundColor: '#333',
          color: '#fff',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <div style={{
            flex: '2',
          }}>
            <a href="#" style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: '#fff',
            }}>{Logo}</a>
          </div>
          <div style={{
            flex: '1',
          }}>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_1}</a>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_2}</a>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_3}</a>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_4}</a>
          </div>
          <div style={{
            flex: '1',
          }}>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_5}</a>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_6}</a>
          </div>
        </div>
      )
    },
    Footer_Two_Blue: {
      fields: {
        Logo: { type: "text" },
        Link_1: { type: "text" },
        Link_2: { type: "text" },
        Link_3: { type: "text" },
        Link_4: { type: "text" },
        Link_5: { type: "text" },
        Link_6: { type: "text" },
      },
      defaultProps: {
        Logo: "Logo",
        Link_1: "Home",
        Link_2: "About",
        Link_3: "Services",
        Link_4: "Contact",
        Link_5: "Privacy Policy",
        Link_6: "Terms of Service",


      },
      render: ({ Logo, Link_1, Link_2, Link_3, Link_4, Link_5, Link_6 }) => (
        <div style={{
          backgroundColor: '#0158ad',
          color: '#fff',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <div style={{
            flex: '2',
          }}>
            <a href="#" style={{
              fontSize: '24px',
              fontWeight: 'bold',
              textDecoration: 'none',
              color: '#fff',
            }}>{Logo}</a>
          </div>
          <div style={{
            flex: '1',
          }}>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_1}</a>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_2}</a>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_3}</a>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_4}</a>
          </div>
          <div style={{
            flex: '1',
          }}>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_5}</a>
            <a href="#" style={{
              color: '#fff',
              textDecoration: 'none',
              display: 'block',
              margin: '8px 0',
            }}>{Link_6}</a>
          </div>
        </div>
      )
    },
    // packages: {

    // }
  },
};

export default config;