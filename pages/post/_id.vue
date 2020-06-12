<template>
  <div>
    <article-detail :post="article"></article-detail>
    <copy-right :category="article.category" :copyright="article.copyright"></copy-right>
    <related :relate="relate" :latest="latest"></related>
    <comment :article="article.id"></comment>
    <reviewer></reviewer>
  </div>
</template>

<script>
  import ArticleDetail from '~/components/article-detail'
  import CopyRight from '~/components/copy-right'
  import Related from '~/components/related'
  import Comment from '~/components/comment'
  import Reviewer from '~/components/reviewer'

  export default {
  name: "id",
  components: {
    ArticleDetail,
    CopyRight,
    Related,
    Comment,
    Reviewer
  },
  data() {
    return {
      relate: [
        {
          title: 'lfishdfnsfsdf',
          id: 'fsdfsdf'
        },
        {
          title: 'fshdfkjdslfsdf',
          id: 'gfddhkjgndf'
        },
        {
          title: 'fshdfkjdslfsdf',
          id: 'ghfdkjhd'
        },
        {
          title: 'fshdfkjdslfsdf',
          id: '3ehjwjkm'
        },
        {
          title: 'fshdfkjdslfsdf',
          id: 'fgjlijild'
        }
      ],
      latest: [
        {
          title: 'fshdfkjdslfsdf',
          id: 'gjlwkemlq'
        },
        {
          title: 'fshdfkjdslfsdf',
          id: 'qwertewds'
        },
        {
          title: 'fshdfkjdslfsdf',
          id: 'wqererjw'
        },
        {
          title: 'fshdfkjdslfsdf',
          id: 'geghofkll'
        },
        {
          title: 'fshdfkjdslfsdf',
          id: 'rhidfgjlkgm'
        }
      ],
      article: {
        id: '',
        title: '文章标题测试',
        // 作者的用户id
        userId: 'rainbow',
        // 作者的用户名
        author: '东流长江水',
        date: '1小时前',
        createDate: '2019年5月6日 14:12',
        updateDate: '2019年5月6日 14:34',
        content: '# SpringBoot中使用Webflux实现SSE\n' +
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
          '```',
        comment: 0,
        view: 0,
        category: 'Spring',
        copyright: '个人原创文章，转载请联系作者，注明出处'
      }
    }
  },
  mounted() {
    // 根据路由参数获取文章id
    this.article.id = this.$route.params.id;
  },
  /**
   * 对路由参数进行校验
   *
   * @param params
   * @returns {boolean}
   */
  validate({params}) {
    return !(typeof (params.id) == "undefined");
  }
}
</script>

<style scoped>

</style>
