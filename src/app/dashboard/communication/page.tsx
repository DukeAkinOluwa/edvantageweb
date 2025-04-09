'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ChatsPage from '@/components/pages/chatsPage';
import GroupsPage from '@/components/pages/studyGroupPage';
import { MessageCircle, Users, ArrowLeftRight } from 'lucide-react';

import styles from "@/styles/pages/communication.module.scss"

const CommunicationPage: React.FC = () => {

  return (
    <div className={styles.wrapper}>
      <Tabs defaultValue="chats" className={styles.tabsWrapper}>
        <div className={styles.tabsHeader}>
          <h1 className={styles.tabsTitle}></h1>
          <div className={styles.tabsControls}>
            <TabsList className={styles.tabsList}>
              <TabsTrigger
                value="chats"
                className={`${styles.tabTrigger}`}
              >
                <MessageCircle className={styles.icon} />
                <span className={styles.tabLabel}>Chats</span>
              </TabsTrigger>

              <div className={styles.tabDivider}>
                <ArrowLeftRight className={styles.icon} />
              </div>

              <TabsTrigger
                value="groups"
                className={`${styles.tabTrigger}`}
              >
                <Users className={styles.icon} />
                <span className={styles.tabLabel}>Study Groups</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="chats" className={styles.tabsContent}>
          <ChatsPage />
        </TabsContent>

        <TabsContent value="groups" className={styles.tabsContent}>
          <GroupsPage />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunicationPage;
