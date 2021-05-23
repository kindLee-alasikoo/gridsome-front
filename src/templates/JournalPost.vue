<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 v-html="$context.allData.title" class="journal-title" />
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name" v-text="$context.allData.Author" />
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div v-text="$context.allData.Date"/>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{ $context.allData.Time }} min read</span>
            </div>
          </div>          
        </div>
 <g-image
                :src="'http://117.50.38.162:1337'+item.thumbnail.url"
                :alt="item.title"
                class="thumbnail"
            />
        <JournalContent :content="$context.allData.content" />

      </div>
    </div>
  </Layout>
  
</template>



<script>
import JournalContent from "@/components/JournalContent"

export default {
  components: {
    JournalContent
  },
  metaInfo () {
    return {
      title: this.$context.allData.title
    }
  }
}
</script>

<style scoped>
.journal-container {
  max-width: 840px;
}
.journal-header {
  padding: 2rem 0 4rem 0;
}
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.journal-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.journal-meta > div {
  margin-right: 4rem;
}
.journal-meta > div:last-of-type {
  margin: 0;
}
</style>
