import React from "react";
import HomeContent from "./HomeContent";

const ContentContainer = ({ activeTab }: any) => {
  const renderContent = (tab: string) => {
    switch (tab) {
      case "home":
        return <HomeContent />;

      case "about":
        return (
          <div className="p-4">
            👨‍💻 <b>About Me:</b> I’m Rafey, a full-stack developer passionate
            about creating unique digital experiences.
          </div>
        );

      case "projects":
        return (
          <section>
            <h2>Content</h2>
            <p>
              Life is a journey that continuously tests our patience,
              resilience, and determination, yet it also offers endless
              opportunities for growth, learning, and achievement. Every
              individual faces challenges, whether big or small, that shape
              their character and define their future. In today’s fast-paced
              world, where competition is tough and distractions are endless, it
              has become essential to remain focused on personal goals and
              values. Success does not come overnight; it requires consistent
              effort, dedication, and the ability to adapt to changing
              circumstances. Many people give up when they encounter failure,
              but in reality, failure is nothing more than a stepping stone
              toward success. It teaches us valuable lessons that no book or
              lecture can provide, and it strengthens our willpower to try again
              with a smarter approach. At the same time, discipline plays a
              crucial role in achieving long-term objectives. Without
              discipline, even the most talented person can lose direction and
              waste potential. Setting realistic goals, breaking them down into
              smaller tasks, and working consistently is a proven strategy
              followed by successful individuals across the globe. Moreover, it
              is equally important to maintain a balance between physical
              health, mental peace, and professional ambitions. Neglecting
              health in the pursuit of success often results in regret later,
              while ignoring personal happiness for professional gain can lead
              to dissatisfaction. Therefore, one must cultivate positive habits
              such as regular exercise, reading, maintaining gratitude, and
              spending quality time with loved ones. These small practices
              create a strong foundation for a fulfilling life. In addition,
              society today demands not only personal excellence but also
              collective responsibility. Helping others, respecting differences,
              and contributing to the welfare of the community make us better
              human beings and create a positive environment where everyone can
              thrive. Knowledge is another pillar of progress; in the digital
              age, access to information has never been easier, but the ability
              to analyze and apply that knowledge wisely sets leaders apart from
              followers. Education should not end with school or college, rather
              it must continue throughout life as we adapt to new challenges,
              technologies, and global issues. A successful person is not
              someone who only achieves financial stability but someone who
              remains humble, compassionate, and eager to learn at every stage
              of life. True happiness lies not in competing with others but in
              competing with your own past self and becoming better each day. If
              one stays committed, learns from mistakes, and refuses to quit
              despite obstacles, there is no limit to what can be achieved. In
              conclusion, life is a canvas where every action, every choice, and
              every effort paints the picture of who we are and what legacy we
              leave behind. By combining discipline, positivity, perseverance,
              and compassion, one can not only reach great heights of success
              but also inspire others to do the same. Life is a journey that
              continuously tests our patience, resilience, and determination,
              yet it also offers endless opportunities for growth, learning, and
              achievement. Every individual faces challenges, whether big or
              small, that shape their character and define their future. In
              today’s fast-paced world, where competition is tough and
              distractions are endless, it has become essential to remain
              focused on personal goals and values. Success does not come
              overnight; it requires consistent effort, dedication, and the
              ability to adapt to changing circumstances. Many people give up
              when they encounter failure, but in reality, failure is nothing
              more than a stepping stone toward success. It teaches us valuable
              lessons that no book or lecture can provide, and it strengthens
              our willpower to try again with a smarter approach. At the same
              time, discipline plays a crucial role in achieving long-term
              objectives. Without discipline, even the most talented person can
              lose direction and waste potential. Setting realistic goals,
              breaking them down into smaller tasks, and working consistently is
              a proven strategy followed by successful individuals across the
              globe. Moreover, it is equally important to maintain a balance
              between physical health, mental peace, and professional ambitions.
              Neglecting health in the pursuit of success often results in
              regret later, while ignoring personal happiness for professional
              gain can lead to dissatisfaction. Therefore, one must cultivate
              positive habits such as regular exercise, reading, maintaining
              gratitude, and spending quality time with loved ones. These small
              practices create a strong foundation for a fulfilling life. In
              addition, society today demands not only personal excellence but
              also collective responsibility. Helping others, respecting
              differences, and contributing to the welfare of the community make
              us better human beings and create a positive environment where
              everyone can thrive. Knowledge is another pillar of progress; in
              the digital age, access to information has never been easier, but
              the ability to analyze and apply that knowledge wisely sets
              leaders apart from followers. Education should not end with school
              or college, rather it must continue throughout life as we adapt to
              new challenges, technologies, and global issues. A successful
              person is not someone who only achieves financial stability but
              someone who remains humble, compassionate, and eager to learn at
              every stage of life. True happiness lies not in competing with
              others but in competing with your own past self and becoming
              better each day. If one stays committed, learns from mistakes, and
              refuses to quit despite obstacles, there is no limit to what can
              be achieved. In conclusion, life is a canvas where every action,
              every choice, and every effort paints the picture of who we are
              and what legacy we leave behind. By combining discipline,
              positivity, perseverance, and compassion, one can not only reach
              great heights of success but also inspire others to do the same.
              Life is a journey that continuously tests our patience,
              resilience, and determination, yet it also offers endless
              opportunities for growth, learning, and achievement. Every
              individual faces challenges, whether big or small, that shape
              their character and define their future. In today’s fast-paced
              world, where competition is tough and distractions are endless, it
              has become essential to remain focused on personal goals and
              values. Success does not come overnight; it requires consistent
              effort, dedication, and the ability to adapt to changing
              circumstances. Many people give up when they encounter failure,
              but in reality, failure is nothing more than a stepping stone
              toward success. It teaches us valuable lessons that no book or
              lecture can provide, and it strengthens our willpower to try again
              with a smarter approach. At the same time, discipline plays a
              crucial role in achieving long-term objectives. Without
              discipline, even the most talented person can lose direction and
              waste potential. Setting realistic goals, breaking them down into
              smaller tasks, and working consistently is a proven strategy
              followed by successful individuals across the globe. Moreover, it
              is equally important to maintain a balance between physical
              health, mental peace, and professional ambitions. Neglecting
              health in the pursuit of success often results in regret later,
              while ignoring personal happiness for professional gain can lead
              to dissatisfaction. Therefore, one must cultivate positive habits
              such as regular exercise, reading, maintaining gratitude, and
              spending quality time with loved ones. These small practices
              create a strong foundation for a fulfilling life. In addition,
              society today demands not only personal excellence but also
              collective responsibility. Helping others, respecting differences,
              and contributing to the welfare of the community make us better
              human beings and create a positive environment where everyone can
              thrive. Knowledge is another pillar of progress; in the digital
              age, access to information has never been easier, but the ability
              to analyze and apply that knowledge wisely sets leaders apart from
              followers. Education should not end with school or college, rather
              it must continue throughout life as we adapt to new challenges,
              technologies, and global issues. A successful person is not
              someone who only achieves financial stability but someone who
              remains humble, compassionate, and eager to learn at every stage
              of life. True happiness lies not in competing with others but in
              competing with your own past self and becoming better each day. If
              one stays committed, learns from mistakes, and refuses to quit
              despite obstacles, there is no limit to what can be achieved. In
              conclusion, life is a canvas where every action, every choice, and
              every effort paints the picture of who we are and what legacy we
              leave behind. By combining discipline, positivity, perseverance,
              and compassion, one can not only reach great heights of success
              but also inspire others to do the same. Life is a journey that
              continuously tests our patience, resilience, and determination,
              yet it also offers endless opportunities for growth, learning, and
              achievement. Every individual faces challenges, whether big or
              small, that shape their character and define their future. In
              today’s fast-paced world, where competition is tough and
              distractions are endless, it has become essential to remain
              focused on personal goals and values. Success does not come
              overnight; it requires consistent effort, dedication, and the
              ability to adapt to changing circumstances. Many people give up
              when they encounter failure, but in reality, failure is nothing
              more than a stepping stone toward success. It teaches us valuable
              lessons that no book or lecture can provide, and it strengthens
              our willpower to try again with a smarter approach. At the same
              time, discipline plays a crucial role in achieving long-term
              objectives. Without discipline, even the most talented person can
              lose direction and waste potential. Setting realistic goals,
              breaking them down into smaller tasks, and working consistently is
              a proven strategy followed by successful individuals across the
              globe. Moreover, it is equally important to maintain a balance
              between physical health, mental peace, and professional ambitions.
              Neglecting health in the pursuit of success often results in
              regret later, while ignoring personal happiness for professional
              gain can lead to dissatisfaction. Therefore, one must cultivate
              positive habits such as regular exercise, reading, maintaining
              gratitude, and spending quality time with loved ones. These small
              practices create a strong foundation for a fulfilling life. In
              addition, society today demands not only personal excellence but
              also collective responsibility. Helping others, respecting
              differences, and contributing to the welfare of the community make
              us better human beings and create a positive environment where
              everyone can thrive. Knowledge is another pillar of progress; in
              the digital age, access to information has never been easier, but
              the ability to analyze and apply that knowledge wisely sets
              leaders apart from followers. Education should not end with school
              or college, rather it must continue throughout life as we adapt to
              new challenges, technologies, and global issues. A successful
              person is not someone who only achieves financial stability but
              someone who remains humble, compassionate, and eager to learn at
              every stage of life. True happiness lies not in competing with
              others but in competing with your own past self and becoming
              better each day. If one stays committed, learns from mistakes, and
              refuses to quit despite obstacles, there is no limit to what can
              be achieved. In conclusion, life is a canvas where every action,
              every choice, and every effort paints the picture of who we are
              and what legacy we leave behind. By combining discipline,
              positivity, perseverance, and compassion, one can not only reach
              great heights of success but also inspire others to do the same.
              Life is a journey that continuously tests our patience,
              resilience, and determination, yet it also offers endless
              opportunities for growth, learning, and achievement. Every
              individual faces challenges, whether big or small, that shape
              their character and define their future. In today’s fast-paced
              world, where competition is tough and distractions are endless, it
              has become essential to remain focused on personal goals and
              values. Success does not come overnight; it requires consistent
              effort, dedication, and the ability to adapt to changing
              circumstances. Many people give up when they encounter failure,
              but in reality, failure is nothing more than a stepping stone
              toward success. It teaches us valuable lessons that no book or
              lecture can provide, and it strengthens our willpower to try again
              with a smarter approach. At the same time, discipline plays a
              crucial role in achieving long-term objectives. Without
              discipline, even the most talented person can lose direction and
              waste potential. Setting realistic goals, breaking them down into
              smaller tasks, and working consistently is a proven strategy
              followed by successful individuals across the globe. Moreover, it
              is equally important to maintain a balance between physical
              health, mental peace, and professional ambitions. Neglecting
              health in the pursuit of success often results in regret later,
              while ignoring personal happiness for professional gain can lead
              to dissatisfaction. Therefore, one must cultivate positive habits
              such as regular exercise, reading, maintaining gratitude, and
              spending quality time with loved ones. These small practices
              create a strong foundation for a fulfilling life. In addition,
              society today demands not only personal excellence but also
              collective responsibility. Helping others, respecting differences,
              and contributing to the welfare of the community make us better
              human beings and create a positive environment where everyone can
              thrive. Knowledge is another pillar of progress; in the digital
              age, access to information has never been easier, but the ability
              to analyze and apply that knowledge wisely sets leaders apart from
              followers. Education should not end with school or college, rather
              it must continue throughout life as we adapt to new challenges,
              technologies, and global issues. A successful person is not
              someone who only achieves financial stability but someone who
              remains humble, compassionate, and eager to learn at every stage
              of life. True happiness lies not in competing with others but in
              competing with your own past self and becoming better each day. If
              one stays committed, learns from mistakes, and refuses to quit
              despite obstacles, there is no limit to what can be achieved. In
              conclusion, life is a canvas where every action, every choice, and
              every effort paints the picture of who we are and what legacy we
              leave behind. By combining discipline, positivity, perseverance,
              and compassion, one can not only reach great heights of success
              but also inspire others to do the same.
            </p>
          </section>
        );

      case "contact":
        return (
          <div className="p-4">
            📩 <b>Contact:</b>
            <p>Email: rafey@example.com</p>
            <p>LinkedIn: linkedin.com/in/rafey</p>
          </div>
        );

      default:
        return <div className="p-4">Select a menu item!</div>;
    }
  };
  return <div className="content">{renderContent(activeTab)}</div>;
};

export default ContentContainer;
