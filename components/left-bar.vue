<template>
  <div>
    <el-card class="box-card" shadow="hover" header="最新文章">
      <div class="articles">
        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
          <a-list-item slot="renderItem" key="item.title" slot-scope="item">
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
            <a-list-item-meta>
              <nuxt-link :to="item.href" slot="title">
                {{ item.title }}
              </nuxt-link>
              <dent-icon slot="avatar"></dent-icon>
            </a-list-item-meta>
            <div class="simple-content" v-text="item.content">
            </div>
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
      { type: 'eye', text: '16' },
      { type: 'message', text: '2' }
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis deserunt eos hic in iste iure modi obcaecati, possimus quod recusandae sit sunt ut? Amet commodi, nobis! Adipisci assumenda, distinctio esse incidunt laboriosam maxime quas quasi ratione recusandae tenetur voluptates.',
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
  /deep/.simple-content {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    font-size: 13px;
    -webkit-line-clamp: 4;
  }

</style>
