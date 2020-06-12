<template>
  <!-- 帖子具体内容 -->
  <el-card shadow="hover" class="info-card">
    <div >
      <h3>{{title}}</h3>

      <div>
        <div class="meta pull-left">
          <b-row>
            <b-col sm="1">
              <span>
                <dent-icon :user-id="author"></dent-icon>
              </span>
            </b-col>
            <b-col sm="4">
              <a-tooltip placement="bottom">
                <template slot="title">
                  最后更新：2019年5月5日 14:32 <br>
                  首发：2019年5月5日 14:32
                </template>
                by&nbsp;<span>{{author}}</span>.<span class="date" >{{date}}</span>
              </a-tooltip>
            </b-col>
            <b-col sm="7">
              <span class="comment" ><i class="el-icon-chat-round"></i> {{comment}}评论</span>
              <span class="views">&nbsp;<i class="el-icon-view"></i> {{view}}阅读</span>
            </b-col>
          </b-row>
        </div>
      </div>

      <div >
        <show-more style="margin-top: 20px" :show-height="showHeight" :content="contentTxt"></show-more>
      </div>

    </div>
  </el-card>
</template>

<script>
  import ShowMore from './show-more'
  import {BCol, BRow, BIconHammer, BIcon} from 'bootstrap-vue'
  import DentIcon from '~/components/dent-icon'

  export default {
    name: 'article-detail',
    data () {
      return {
        showHeight: 295,
        author: '东流长江水',
        date: '2019-05-16',
        comment: 5,
        view: 624,
        like: 21,
        title: '文章测试标题',
        contentTxt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi consectetur distinctio, eaque error eveniet exercitationem hic magni maiores nobis nostrum odio officia porro possimus quae qui quo reprehenderit sed sunt veritatis. Autem dolores labore mollitia natus tempora vel voluptas? Accusantium beatae dolorum explicabo laboriosam, rerum sit. Accusamus distinctio error facere facilis fugiat id impedit ipsa ipsam iure, maxime mollitia necessitatibus nulla obcaecati officia placeat provident quos, saepe sapiente similique, suscipit. Ab delectus dolorem incidunt officia rerum. Accusantium aperiam aspernatur consectetur corporis cupiditate debitis delectus dolores dolorum enim eveniet expedita impedit ipsum labore modi nihil nisi nulla officiis, placeat, quis quisquam reiciendis rem repudiandae ut velit veniam. Ab ad aperiam aut beatae blanditiis deleniti dignissimos dolorem doloribus eligendi enim error est fuga fugiat fugit iusto maxime modi nobis officiis porro quam quasi quia quod repellat, sapiente sint sit suscipit voluptatem? Assumenda culpa, cupiditate deleniti dignissimos illo ipsa mollitia nam omnis, perspiciatis quam quidem quo suscipit tempore? Beatae commodi deleniti dignissimos ea minima modi quidem tenetur, vero? Amet expedita fuga fugiat labore laudantium modi nihil veritatis, voluptatem? Accusamus aliquam animi, aperiam blanditiis commodi consectetur cum deserunt dolor dolore doloremque et exercitationem harum impedit in ipsum iusto laborum magni maiores maxime minus nam necessitatibus nostrum officiis pariatur perferendis placeat provident quasi quisquam, reprehenderit rerum saepe temporibus ullam vel. Aperiam aspernatur commodi consectetur distinctio ducimus ipsa itaque minus nesciunt, officia, veritatis vitae voluptatem. Animi cupiditate dolor et fugiat minima optio perferendis vitae. Blanditiis consequuntur dicta dolore dolorum eligendi eos facere harum id ipsa iusto laboriosam modi odio odit officia optio, praesentium quasi sapiente sequi similique sunt tempore temporibus unde. A aut autem, consectetur eos fuga hic id magni molestias mollitia necessitatibus praesentium quibusdam quos recusandae sint suscipit ut velit veniam? Architecto consequuntur ea eveniet provident quibusdam voluptates. Aut corporis, doloribus eveniet exercitationem expedita, laborum molestiae, necessitatibus perferendis possimus quia quis quisquam quos recusandae similique voluptate. Accusantium ad amet aperiam asperiores corporis deserunt dolor ducimus ea, eius excepturi facilis fuga id in inventore iure labore laboriosam molestiae nobis non obcaecati odit pariatur porro provident quaerat quo quos repellendus sit tempore velit vitae? Ad excepturi minus mollitia nam nulla. Incidunt ipsa maiores quod reiciendis. Accusamus ad alias aliquam autem dicta earum esse exercitationem harum illum in, laborum officiis porro quasi, qui sunt! Quasi quia quis sit tenetur. Cumque expedita facere in sunt. Ad animi asperiores consectetur cupiditate, deserunt dolor ea enim libero natus neque pariatur quos, totam. Animi aperiam aut consectetur consequuntur culpa cumque esse fugit hic incidunt ipsam ipsum labore magnam minima molestias necessitatibus nesciunt nobis non obcaecati optio perferendis quae quis quod repudiandae, saepe sint sit soluta sunt tempora temporibus tenetur ullam unde veniam vero? Dolorem est itaque non nostrum quas. Adipisci atque aut, ea eius eum ex facere fugiat illum modi nihil nostrum perferendis quasi quo reiciendis repudiandae rerum sed sunt tempora vero voluptatem? Impedit optio recusandae unde velit! A adipisci aspernatur assumenda autem deleniti doloribus ea earum eum harum ipsam laborum minus odio optio reiciendis sit, tempora tenetur unde vel velit.\n'
      }
    },
    created() {
      let markdownString = '# SpringBoot中使用Webflux实现SSE\n' +
        '\n' +
        '## 1. 概述\n' +
        '\n' +
        '`WebFlux`是Spring提出的用于解决服务端响应式编程的一套方案，天生具有异步性。\n' +
        '\n' +
        '它是基于`Reactor`来实现响应式的。`Reactor`可以理解为jdk8的`stream`加上jdk9的`Reactive Stream`。`stream`用于处理元素操作，`reactive stream`用于解决负压和数据传送。\n' +
        '\n' +
        '`Reactor`其实是 `Reative Stream`中`Publisher`的抽象子类。其实而在`Reactor`中，提供了两个重要的实现类：`Mono`和`Flux`。`Mono`表示的是包含0-1个元素的异步序列，而`Flux`表示的是包含0-N个元素的异步序列。\n' +
        '\n' +
        'WebFlux支持两种方式实现：\n' +
        '\n' +
        '- 基于SpringMVC的`@Controller`注解\n' +
        '- 使用`Route Function`\n' +
        '\n' +
        '`Route Function`与SpringMVC的区别在于前者将路由定义与功能实现分开。两种方式各有优势，熟悉SpringMVC开发的，就可以直接使用原来的开发方式。\n' +
        '\n' +
        '想要在Spring中实现SSE，也就是服务器向客户端推送数据的效果其实很简单。只需要将本身要返回的数据用`Reactor`包装，再在controller方法中返回该包装类，将数据交给Spring消费即可。一定要记住，不能自己创建了Reactor后，自己去进行消费。\n' +
        '\n' +
        '## 2. 代码示例\n' +
        '\n' +
        '本文基于`SpringBoot 2.1.5`版本进行实现。\n' +
        '\n' +
        '### 2.1 引入maven依赖\n' +
        '\n' +
        '引入了webflux的依赖后，就不需要再引入web的启动器依赖。\n' +
        '\n' +
        '```xml\n' +
        '\t\t<dependency>\n' +
        '            <groupId>org.springframework.boot</groupId>\n' +
        '            <artifactId>spring-boot-starter-webflux</artifactId>\n' +
        '        </dependency>\n' +
        '        <dependency>\n' +
        '            <groupId>org.projectlombok</groupId>\n' +
        '            <artifactId>lombok</artifactId>\n' +
        '            <optional>true</optional>\n' +
        '        </dependency>\n' +
        '```\n' +
        '\n' +
        '### 2.2 开发controller\n' +
        '\n' +
        '```java\n' +
        'package top.rainbowecho.webflux.controller;\n' +
        '\n' +
        '/**\n' +
        ' * @author rainbow\n' +
        ' * @since 2020/3/5 20:49\n' +
        ' */\n' +
        '@RestController\n' +
        '@Slf4j\n' +
        'public class DemoController {\n' +
        '\n' +
        '    @CrossOrigin(origins = "*")\n' +
        '    @GetMapping(value = "/mono", produces = MediaType.TEXT_EVENT_STREAM_VALUE)\n' +
        '    public Mono<Double> mono() {\n' +
        '        long start = System.currentTimeMillis();\n' +
        '        Mono<Double> doubleMono = Mono.fromSupplier(Math::random);\n' +
        '        log.info("webflux end, cast: " + (System.currentTimeMillis() - start));\n' +
        '        return doubleMono;\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        '```';
      this.contentTxt = markdownString;
    },
    components: {
      ShowMore,
      BRow,
      BCol,
      DentIcon,
      BIconHammer,
      BIcon
    },
    methods: {
      loadIdentityAvatar(userId) {

      },
      fnToggleLikeArticle(val) {
        console.log(val);
      }
    }
  }
</script>

<style scoped>

</style>
