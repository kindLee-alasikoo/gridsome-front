<template>
  <Layout>
    <div class="container">
      
      <Hero />
      <ProjectsGrid :projects="$page.strapi.projects" />
    </div>
    <LatestJournals :journals="$page.strapi.journals" />
  </Layout>
</template>

<page-query>
query Posts{
  strapi{
   projects:allProjectPosts{
     id
       title
      date

    thumbnail{
      url

      width
    }
  
  }
   journals:allJournalPosts{
     id
       title
       
   
  
  }
}
    
}

 
</page-query>

<script>
import Hero from '@/components/Hero'
import ProjectsGrid from '@/components/ProjectsGrid'
import LatestJournals from '@/components/LatestJournals'

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals,
  },
  mounted(){
    console.log(this.$page)
  }
}
</script>
