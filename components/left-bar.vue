<template>
  <div>
    <el-card class="box-card" shadow="hover" header="最新文章">
      <div class="articles">
        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
          <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
            <template v-for="{ type, text } in item.actions" slot="actions">
              <span :key="type">
                <a-icon :type="type" style="margin-right: 8px" />
                  {{ text }}
              </span>
            </template>
            <img
              slot="extra"
              width="272"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
            <a-list-item-meta :description="item.description">
              <a slot="title" :href="item.href">{{ item.title }}</a>
              <dent-icon slot="avatar"></dent-icon>
            </a-list-item-meta>
            {{ item.content }}
          </a-list-item>
        </a-list>

      </div>
    </el-card>
  </div>
</template>

<script>
import Paper from './paper'
import Micro from './micro-pager'
import Pagination from './pagination'
import DentIcon from './dent-icon'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: '/post/sfd',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    actions: [
      { type: 'star-o', text: '16' },
      { type: 'like-o', text: '56' },
      { type: 'message', text: '2' },
    ],
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

export default {
  name: 'left-bar',
  components: {
    Paper,
    Micro,
    Pagination,
    DentIcon
  },
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 7,
      }
    }
  }
}
</script>

<style scoped>

</style>
