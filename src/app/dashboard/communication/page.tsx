'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ChatsPage from '@/components/pages/chatsPage';
import GroupsPage from '@/components/pages/studyGroupPage';
import { MessageCircle, Users, ArrowLeftRight } from 'lucide-react';

const CommunicationPage: React.FC = () => {

  const [activeTab, setActiveTab] = React.useState('chats');

  return (
    <div className="space-y-6">
      <Tabs defaultValue="chats" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Communication</h1>
          <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-lg shadow-sm">
            <TabsList className="bg-transparent p-1 h-auto rounded-lg">
              <TabsTrigger 
                value="chats" 
                className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md ${activeTab === 'chats' ? 'tabsTrigger' : ''}`}
                onClick={() => setActiveTab('chats')}
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">Chats</span>
              </TabsTrigger>
              <div className="flex items-center px-1 text-muted-foreground">
                <ArrowLeftRight className="h-4 w-4" />
              </div>
              <TabsTrigger 
                value="groups" 
                className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md ${activeTab === 'groups' ? 'tabsTrigger' : ''}`}
                onClick={() => setActiveTab('groups')}
              >
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Study Groups</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        
        <TabsContent value="chats" className="m-0">
          <ChatsPage />
        </TabsContent>
        
        <TabsContent value="groups" className="m-0">
          <GroupsPage />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommunicationPage;
