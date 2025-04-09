'use client';

import React, { useState } from 'react';
import { 
  Search, Plus, Download, ExternalLink, 
  FileText, Film, Link as LinkIcon, Notebook, Image
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { resources, Resource, ResourceType } from '@/data/dummyData';

import styles from "@/styles/pages/resources.module.scss"

const ResourcesPage = () => {
  const [resourcesList, setResourcesList] = useState<Resource[]>(resources);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddingResource, setIsAddingResource] = useState(false);
  const { toast } = useToast();
  
  // New resource form state
  const [newResource, setNewResource] = useState({
    title: '',
    description: '',
    type: 'pdf' as ResourceType,
    url: '',
    category: '',
  });
  
  // Filter resources based on search query
  const filteredResources = resourcesList.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Get resources by type
  const pdfResources = filteredResources.filter(resource => resource.type === 'pdf');
  const videoResources = filteredResources.filter(resource => resource.type === 'video');
  const linkResources = filteredResources.filter(resource => resource.type === 'link');
  const noteResources = filteredResources.filter(resource => resource.type === 'note');
  
  // Handle new resource form change
  const handleNewResourceChange = (field: string, value: string) => {
    setNewResource({
      ...newResource,
      [field]: value,
    });
  };
  
  // Add new resource
  const addResource = () => {
    const newResourceItem: Resource = {
      id: `resource-${Date.now()}`,
      title: newResource.title,
      description: newResource.description,
      type: newResource.type,
      url: newResource.url,
      uploadedBy: 'John Doe',
      uploadedAt: new Date().toISOString(),
      category: newResource.category,
      likes: 0,
      downloads: 0,
    };
    
    setResourcesList(prev => [...prev, newResourceItem]);
    
    toast({
      title: "Resource added",
      description: `"${newResource.title}" has been added to your resources.`,
    });
    
    setNewResource({
      title: '',
      description: '',
      type: 'pdf',
      url: '',
      category: '',
    });
    
    setIsAddingResource(false);
  };
  
  // Download or open resource
  const accessResource = (resource: Resource) => {
    if (resource.type === 'link') {
      toast({
        title: "Opening link",
        description: `Opening "${resource.title}" in a new tab.`,
      });
      window.open(resource.url, '_blank');
    } else {
      toast({
        title: "Downloading resource",
        description: `Downloading "${resource.title}".`,
      });
      
      // Increment downloads count
      setResourcesList(prev => 
        prev.map(r => 
          r.id === resource.id 
            ? { ...r, downloads: r.downloads + 1 } 
            : r
        )
      );
    }
  };
  
  // Like resource
  const likeResource = (resource: Resource) => {
    setResourcesList(prev => 
      prev.map(r => 
        r.id === resource.id 
          ? { ...r, likes: r.likes + 1 } 
          : r
      )
    );
    
    toast({
      title: "Resource liked",
      description: `You liked "${resource.title}".`,
    });
  };
  
  // Get resource icon based on type
  const getResourceIcon = (type: ResourceType) => {
    switch (type) {
      case 'pdf':
        return <FileText className={`${styles.icon} ${styles.pdf}`} />;
      case 'video':
        return <Film className={`${styles.icon} ${styles.video}`} />;
      case 'link':
        return <LinkIcon className={`${styles.icon} ${styles.link}`} />;
      case 'note':
        return <Notebook className={`${styles.icon} ${styles.note}`} />;
      case 'image':
        return <Image className={`${styles.icon} ${styles.image}`} />;
      default:
        return <FileText className={styles.icon} />;
    }
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  // Resource card component
  const ResourceCard = ({ resource }: { resource: Resource }) => (
    <Card className={styles.resourceCard}>
      <CardHeader className={styles.cardHeader}>
        <div className={styles.headerContent}>
          <div className={styles.iconWrapper}>
            {getResourceIcon(resource.type)}
          </div>
          <div>
            <CardTitle className={styles.cardTitle}>{resource.title}</CardTitle>
            <div className={styles.uploadInfo}>
              Uploaded by {resource.uploadedBy} on {formatDate(resource.uploadedAt)}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <p className={styles.description}>{resource.description}</p>
        {resource.category && (
          <div className={styles.categoryWrapper}>
            <span className={styles.category}>{resource.category}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className={styles.cardFooter}>
        <div className={styles.statsWrapper}>
          <Button 
            variant="ghost" 
            size="sm" 
            className={styles.likeButton}
            onClick={() => likeResource(resource)}
          >
            👍 {resource.likes}
          </Button>
          <div className={styles.downloadInfo}>
            <Download className={styles.smallIcon} />
            {resource.downloads}
          </div>
        </div>
        <Button 
          size="sm" 
          variant="outline"
          onClick={() => accessResource(resource)}
        >
          {resource.type === 'link' ? (
            <>
              <ExternalLink className={styles.actionIcon} />
              Open
            </>
          ) : (
            <>
              <Download className={styles.actionIcon} />
              Download
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
  
  // Empty state component
  const EmptyState = ({ type, onAddClick, searchQuery }: { type: string; onAddClick: () => void; searchQuery?: string; }) => (
    <div className={styles.emptyStateWrapper}>
      <div className={styles.emptyStateIconWrapper}>
        {type === "All" ? (
          <FileText className={styles.defaultIcon} />
        ) : type === "PDFs" ? (
          <FileText className={styles.pdfIcon} />
        ) : type === "Videos" ? (
          <Film className={styles.videoIcon} />
        ) : type === "Links" ? (
          <LinkIcon className={styles.linkIcon} />
        ) : (
          <Notebook className={styles.noteIcon} />
        )}
      </div>
      <h3 className={styles.emptyStateTitle}>No {type} Resources</h3>
      <p className={styles.emptyStateText}>
        {searchQuery
          ? `No ${type.toLowerCase()} resources match your search criteria.`
          : `You don't have any ${type.toLowerCase()} resources yet.`}
      </p>
      <Button onClick={onAddClick}>
        <Plus className={styles.addIcon} />
        Add a Resource
      </Button>
    </div>
  );

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.resourceHeaderWrapper}>
        <h1 className={styles.resourceTitle}></h1>
        <div className={styles.resourceActions}>
          <div className={styles.searchWrapper}>
            <Search className={styles.searchIcon} />
            <Input 
              type="search" 
              placeholder="Search resources..." 
              className={styles.searchInput} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button onClick={() => setIsAddingResource(true)}>
            <Plus className={styles.plusIcon} />
            Add Resource
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="pdfs">PDFs</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="links">Links</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className={styles.tabsContent}>
          {filteredResources.length > 0 ? (
            <div className={styles.gridWrapper}>
              {filteredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <EmptyState type="All" onAddClick={() => setIsAddingResource(true)} />
          )}
        </TabsContent>

        <TabsContent value="pdfs" className={styles.tabsContent}>
          {pdfResources.length > 0 ? (
            <div className={styles.gridWrapper}>
              {pdfResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <EmptyState type="PDFs" onAddClick={() => {
              setNewResource({...newResource, type: 'pdf'});
              setIsAddingResource(true);
            }} />
          )}
        </TabsContent>

        <TabsContent value="videos" className={styles.tabsContent}>
          {videoResources.length > 0 ? (
            <div className={styles.gridWrapper}>
              {videoResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <EmptyState type="Videos" onAddClick={() => {
              setNewResource({...newResource, type: 'video'});
              setIsAddingResource(true);
            }} />
          )}
        </TabsContent>

        <TabsContent value="links" className={styles.tabsContent}>
          {linkResources.length > 0 ? (
            <div className={styles.gridWrapper}>
              {linkResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <EmptyState type="Links" onAddClick={() => {
              setNewResource({...newResource, type: 'link'});
              setIsAddingResource(true);
            }} />
          )}
        </TabsContent>

        <TabsContent value="notes" className={styles.tabsContent}>
          {noteResources.length > 0 ? (
            <div className={styles.gridWrapper}>
              {noteResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <EmptyState type="Notes" onAddClick={() => {
              setNewResource({...newResource, type: 'note'});
              setIsAddingResource(true);
            }} />
          )}
        </TabsContent>
      </Tabs>
      
      {/* Add Resource Dialog */}
      <Dialog open={isAddingResource} onOpenChange={setIsAddingResource}>
        <DialogContent className={styles.dialogContent}>
          <DialogHeader>
            <DialogTitle>Add New Resource</DialogTitle>
            <DialogDescription>
              Add a resource to your library.
            </DialogDescription>
          </DialogHeader>
          <div className={styles.formSection}>
            <div className={styles.formGroup}>
              <Label htmlFor="resource-title">Resource Title</Label>
              <Input 
                id="resource-title" 
                value={newResource.title} 
                onChange={(e) => handleNewResourceChange('title', e.target.value)}
                placeholder="E.g., Data Structures Cheat Sheet"
              />
            </div>
            <div className={styles.formGroup}>
              <Label htmlFor="resource-description">Description</Label>
              <Textarea 
                id="resource-description" 
                value={newResource.description} 
                onChange={(e) => handleNewResourceChange('description', e.target.value)}
                placeholder="Briefly describe this resource"
                rows={3}
              />
            </div>
            <div className={styles.gridContainer}>
              <div className={styles.formGroup}>
                <Label htmlFor="resource-type">Resource Type</Label>
                <Select 
                  value={newResource.type}
                  onValueChange={(value) => handleNewResourceChange('type', value as ResourceType)}
                >
                  <SelectTrigger id="resource-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="link">Link</SelectItem>
                    <SelectItem value="note">Note</SelectItem>
                    <SelectItem value="image">Image</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className={styles.formGroup}>
                <Label htmlFor="resource-category">Category</Label>
                <Input 
                  id="resource-category" 
                  value={newResource.category} 
                  onChange={(e) => handleNewResourceChange('category', e.target.value)}
                  placeholder="E.g., Math, Computer Science"
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <Label htmlFor="resource-url">
                {newResource.type === 'link' ? 'URL' : 'File URL/Path'}
              </Label>
              <Input 
                id="resource-url" 
                value={newResource.url} 
                onChange={(e) => handleNewResourceChange('url', e.target.value)}
                placeholder={newResource.type === 'link' ? 'https://example.com/resource' : 'Upload or enter URL'}
              />
              {newResource.type !== 'link' && (
                <div className={styles.uploadButtonContainer}>
                  <Button variant="outline" type="button" className={styles.uploadButton}>
                    <Plus className={styles.icon} />
                    {`Upload ${newResource.type.toUpperCase()} File`}
                  </Button>
                </div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddingResource(false)}>
              Cancel
            </Button>
            <Button 
              className={styles.addResourceButton} 
              onClick={addResource}
              disabled={!newResource.title || !newResource.url}
            >
              Add Resource
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResourcesPage;
