'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { dashboardFeatures, tasks, events } from '@/data/dummyData';
import { useAuth } from '@/contexts/AuthContext';
import { useAchievements } from '@/contexts/AchievementContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Calendar, CheckCircle, Clock, Award, Star, Users } from 'lucide-react';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, } from "@/components/ui/drawer";

import styles from '@/styles/pages/dashboard.module.scss'

const Dashboard = () => {
    const { user } = useAuth();
    const { userPoints, earnedAchievements } = useAchievements();
    const isMobile = useIsMobile();
    
    // Get today's date in a readable format
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Filter tasks for today and upcoming
    const todayTasks = tasks.filter(task => {
        const dueDate = new Date(task.dueDate).setHours(0, 0, 0, 0);
        const nowDate = new Date().setHours(0, 0, 0, 0);
        return dueDate === nowDate && task.status !== 'completed';
    });
    
    // Filter upcoming events
    const upcomingEvents = events
        .filter(event => new Date(event.startDate) > new Date())
        .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
        .slice(0, 3);
    
    // Get time of day greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    // Calculate user level based on points
    const calculateLevel = (points: number) => {
        // Simple level calculation (adjust as needed)
        return Math.floor(points / 100) + 1;
    };

    const userLevel = calculateLevel(userPoints);
    const pointsToNextLevel = (userLevel * 100) - userPoints;
    const levelProgress = (userPoints % 100);

    // Focus areas for mobile view
    const topFocusAreas = dashboardFeatures.slice(0, 3);

    return (
        <div className="space-y-6">
        {/* Welcome Section with Achievement Level */}
        <section className={styles.userSection}>
            <h1 className={styles.greeting}>{getGreeting()}, {user?.name.split(" ")[0]}</h1>
            <p className="date">{today}</p>

            {/* User Achievement Level - Visible on all devices */}
            <div className={styles.achievementContainer}>
                <div className={styles.achievementHeader}>
                    <div className={styles.achievementInfo}>
                        <Award className={styles.awardIcon} />
                        <span className="level-text">Level {userLevel}</span>
                    </div>
                    <Link href="/dashboard/achievements" className={styles.viewLink}>
                        View all
                    </Link>
                </div>
                <div className={styles.progressBar}>
                    <Progress value={levelProgress} />
                </div>
                <div className={styles.xpInfo}>
                    <span className={styles.xpText}>{userPoints} XP</span>
                    <span className={styles.xpText}>{pointsToNextLevel} XP to Level {userLevel + 1}</span>
                </div>
            </div>
        </section>
        
        {/* Mobile Layout Optimization */}
        {isMobile ? (
            <>
                {/* Priority Cards for Mobile */}
                <section className={styles.tasksDashboard}>
                    <div className={styles.card1}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardTitle}>
                                <div className={styles.titleWrapper}>
                                    <CheckCircle className={styles.icon + ' ' + styles.green} />
                                    Today&apos;s Tasks
                                </div>
                                <span className={styles.taskCount}>{todayTasks.length}</span>
                            </div>
                        </div>
                        <div className={styles.cardContent}>
                            {todayTasks.length > 0 ? (
                                <ul className={styles.taskList}>
                                {todayTasks.slice(0, 2).map(task => (
                                    <li key={task.id} className={styles.taskItem}>
                                    <div className={`${styles.priorityIndicator} ${task.priority}`} />
                                    <p className={styles.taskTitle}>{task.title}</p>
                                    </li>
                                ))}
                                {todayTasks.length > 2 && (
                                    <Link href="/dashboard/calendar" className={styles.viewMore}>View {todayTasks.length - 2} more</Link>
                                )}
                                </ul>
                            ) : (
                                <p className={styles.noTasks}>No tasks for today</p>
                            )}
                        </div>
                        <div className={styles.cardFooter}>
                            <Link href="/dashboard/calendar" className={styles.btn + ' ' + styles.outline}>View All Tasks</Link>
                        </div>
                    </div>

                    <div className={styles.quickActions}>
                        <Link href="/dashboard/calendar/new-task" className={`${styles.btn} ${styles.outline} ${styles.action}`}>
                            <CheckCircle className={styles.icon + ' ' + styles.green} />
                            <span>Add Task</span>
                        </Link>
                        <Link href="/dashboard/calendar/new-event" className={`${styles.btn} ${styles.outline} ${styles.action}`}>
                            <Calendar className={styles.icon + ' ' + styles.blue} />
                            <span>Add Event</span>
                        </Link>
                        <Link href="/dashboard/communication/create" className={`${styles.btn} ${styles.outline} ${styles.action}`}>
                            <Users className={styles.icon + ' ' + styles.purple} />
                            <span>Study Group</span>
                        </Link>
                        <Link href="/dashboard/ai-support" className={`${styles.btn} ${styles.outline} ${styles.action}`}>
                            <Star className={styles.icon + ' ' + styles.yellow} />
                            <span>AI Help</span>
                        </Link>
                    </div>

                    <div className={styles.card1 + ' ' + styles.achievements}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardTitle}>
                                <div className={styles.titleWrapper}>
                                    <Award className={styles.icon + ' ' + styles.yellow} />
                                    Recent Achievements
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardContent}>
                            {earnedAchievements.length > 0 ? (
                                <div className={styles.achievementList}>
                                    {earnedAchievements.slice(0, 2).map(achievement => (
                                        <div key={achievement.id} className={styles.achievementItem}>
                                            <div className={styles.achievementIcon}>
                                                <Star className={styles.icon + ' ' + styles.small + ' ' + styles.yellow} />
                                            </div>
                                            <div className={styles.achievementDetails}>
                                                <p className={styles.achievementTitle}>{achievement.title}</p>
                                                <p className={styles.achievementPoints}>+{achievement.points} points</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className={styles.noAchievements}>No achievements yet</p>
                            )}
                        </div>
                        <div className={styles.cardFooter}>
                            <Link href="/dashboard/achievements" className={styles.btn + ' ' + styles.outline}>All Achievements</Link>
                        </div>
                    </div>
                </section>
                
                {/* Focus Areas Grid - Mobile Optimized */}
                <section className={styles.focusAreasSection}>
                    <h2 className={styles.sectionTitle}>Focus Areas</h2>
                    <div className={styles.gridContainer}>
                        {topFocusAreas.map((feature) => (
                            <Link key={feature.id} href={feature.path}>
                                <Card className={styles.card2}>
                                    <CardHeader className={styles.cardHeader}>
                                        <div className={styles.cardContent}>
                                            <div className={`${styles.iconWrapper} ${feature.color}`}>
                                                <div className={styles.iconSize}>
                                                <feature.icon />
                                                </div>
                                            </div>
                                            <div>
                                                <CardTitle className={styles.cardTitle}>{feature.title}</CardTitle>
                                                <CardDescription className={styles.cardDescription}>{feature.description}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                        
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant="outline" className={styles.viewAllButton}>View All Features</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>All Features</DrawerTitle>
                                    <DrawerDescription>Explore all available features</DrawerDescription>
                                </DrawerHeader>
                                <div className={styles.drawerContent}>
                                <div className={styles.gridContainer}>
                                    {dashboardFeatures.slice(3).map((feature) => (
                                        <Link key={feature.id} href={feature.path}>
                                            <Card className={styles.card}>
                                                <CardHeader className={styles.cardHeader}>
                                                    <div className={styles.cardContent}>
                                                        <div className={`${styles.iconWrapper} ${feature.color}`}>
                                                            <div className={styles.iconSize}>
                                                                <feature.icon />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <CardTitle className={styles.cardTitle}>{feature.title}</CardTitle>
                                                            <CardDescription className={styles.cardDescription}>{feature.description}</CardDescription>
                                                        </div>
                                                    </div>
                                                </CardHeader>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                                </div>
                                <DrawerFooter>
                                    <DrawerClose asChild>
                                        <Button variant="outline">Close</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </section>
            </>
        ) : (
            // Desktop Layout - Keep existing code
            <>
                {/* Quick Actions - Desktop */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Today's Tasks */}
                    <Card>
                        <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                            Today&apos;s Tasks
                        </CardTitle>
                        </CardHeader>
                        <CardContent>
                        {todayTasks.length > 0 ? (
                            <ul className="space-y-2">
                            {todayTasks.map(task => (
                                <li key={task.id} className="flex items-start">
                                <div className={`h-5 w-5 rounded-full mr-2 flex-shrink-0 border ${
                                    task.priority === 'high' 
                                    ? 'border-red-500' 
                                    : task.priority === 'medium'
                                        ? 'border-yellow-500'
                                        : 'border-blue-500'
                                }`} />
                                <div>
                                    <p className="text-sm font-medium">{task.title}</p>
                                    <p className="text-xs text-muted-foreground">
                                    {new Date(task.dueDate).toLocaleTimeString('en-US', {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                    </p>
                                </div>
                                </li>
                            ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-muted-foreground">No tasks for today</p>
                        )}
                        </CardContent>
                        <CardFooter>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="/dashboard/calendar">View All Tasks</Link>
                        </Button>
                        </CardFooter>
                    </Card>
                    
                    {/* Upcoming Events */}
                    <Card>
                        <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                            <Calendar className="mr-2 h-5 w-5 text-blue-500" />
                            Upcoming Events
                        </CardTitle>
                        </CardHeader>
                        <CardContent>
                        {upcomingEvents.length > 0 ? (
                            <ul className="space-y-2">
                            {upcomingEvents.map(event => (
                                <li key={event.id} className="flex items-start">
                                <div className={`h-6 w-6 rounded mr-2 flex-shrink-0 text-white flex items-center justify-center text-xs ${
                                    event.type === 'class' 
                                    ? 'bg-blue-500' 
                                    : event.type === 'exam'
                                        ? 'bg-red-500'
                                        : event.type === 'study'
                                        ? 'bg-green-500'
                                        : event.type === 'group'
                                            ? 'bg-purple-500'
                                            : 'bg-gray-500'
                                }`}>
                                    {event.type.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{event.title}</p>
                                    <p className="text-xs text-muted-foreground">
                                    {new Date(event.startDate).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                    </p>
                                </div>
                                </li>
                            ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-muted-foreground">No upcoming events</p>
                        )}
                        </CardContent>
                        <CardFooter>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="/dashboard/calendar">View Calendar</Link>
                        </Button>
                        </CardFooter>
                    </Card>
                    
                    {/* Quick Access */}
                    <Card>
                        <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                            <Clock className="mr-2 h-5 w-5 text-purple-500" />
                            Quick Actions
                        </CardTitle>
                        </CardHeader>
                        <CardContent>
                        <div className="space-y-2">
                            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                            <Link href="/dashboard/calendar/new-task">+ Add New Task</Link>
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                            <Link href="/dashboard/calendar/new-event">+ Add Event</Link>
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                            <Link href="/dashboard/communication/create">+ Create Study Group</Link>
                            </Button>
                            <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                            <Link href="/dashboard/ai-support">Get AI Study Help</Link>
                            </Button>
                        </div>
                        </CardContent>
                    </Card>
                    </div>
                </section>
                
                {/* Desktop Achievement Level Section */}
                <section>
                    <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center">
                        <Award className="mr-2 h-5 w-5 text-yellow-500" />
                        Learning Progress
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-4">
                        <div className="h-16 w-16 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                            <span className="text-xl font-bold">{userLevel}</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">Level {userLevel}</span>
                            <span className="text-sm text-muted-foreground">{userPoints} / {userLevel * 100} XP</span>
                            </div>
                            <Progress value={levelProgress} className="h-2 mb-2" />
                            <p className="text-sm text-muted-foreground">
                            {pointsToNextLevel} XP needed for Level {userLevel + 1}
                            </p>
                        </div>
                        </div>
                        
                        {earnedAchievements.length > 0 && (
                        <div className="mt-4">
                            <h4 className="text-sm font-semibold mb-2">Recent Achievements</h4>
                            <div className="flex flex-wrap gap-2">
                            {earnedAchievements.slice(0, 3).map((achievement) => (
                                <div key={achievement.id} className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full pl-1 pr-3 py-1">
                                <div className="h-6 w-6 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                                    <Star className="h-3 w-3" />
                                </div>
                                <span className="text-xs font-medium">{achievement.title}</span>
                                </div>
                            ))}
                            </div>
                        </div>
                        )}
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="/dashboard/achievements">View All Achievements</Link>
                        </Button>
                    </CardFooter>
                    </Card>
                </section>
                
                {/* Features Grid */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Explore Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dashboardFeatures.map((feature) => (
                        <Link key={feature.id} href={feature.path}>
                        <Card className="h-full transition-all hover:shadow-md hover:border-edvantage-blue">
                            <CardHeader className="pb-2">
                            <div className={`p-2 rounded-lg w-fit ${feature.color}`}>
                                <div className="h-5 w-5">
                                    <feature.icon />
                                </div>
                            </div>
                            <CardTitle className="text-lg mt-2">{feature.title}</CardTitle>
                            <CardDescription>{feature.description}</CardDescription>
                            </CardHeader>
                        </Card>
                        </Link>
                    ))}
                    </div>
                </section>
            </>
        )}
        </div>
    );
};

export default Dashboard;