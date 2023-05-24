import PostDetails from "../../components/PostDetails/index.vue";
import AddComment from "../../components/PostDetails/AddComment.vue";
import Comments from "../../components/PostDetails/Comments.vue";
import Comment from "../../components/PostDetails/Comment.vue";
import { mount, RouterLinkStub, flushPromises } from "@vue/test-utils";
import ElementPlus from "element-plus";

let wrapper;

const post = {
  userId: 1,
  id: 1,
  title: "Post title test",
  body: "Post body test",
  comments: [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      postId: 1,
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
  ],
  user: {
    id: 1,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442",
    company: {
      name: "Romaguera-Crona",
    },
  },
};

describe("Render posts page header successfully", () => {
  beforeEach(() => {
    wrapper = mount(PostDetails, {
      props: {
        post: post,
        addComment: () => {},
        addCommentForm: {
          name: "",
          email: "",
          message: "",
        },
      },
      global: {
        plugins: [ElementPlus],
        stubs: {
          NuxtLink: RouterLinkStub,
          PostDetailsAddComment: AddComment,
          PostDetailsComments: Comments,
          PostDetailsComment: Comment,
        },
      },
    });
  });

  // Test post data
  it("should render post details", () => {
    expect(wrapper.find("[data-test='post-title']").text()).toBe(
      "Post title test"
    );
    expect(wrapper.find("[data-test='post-body']").text()).toBe(
      "Post body test"
    );
  });

  // Test author data
  it("should render author details", () => {
    expect(wrapper.find("[data-test='author-avatar']").text()).toBe("L");
    expect(wrapper.find("[data-test='author-name']").text()).toBe(
      "Leanne Graham"
    );
    expect(wrapper.find("[data-test='author-company']").text()).toBe(
      "Romaguera-Crona"
    );
    expect(wrapper.find("[data-test='author-phone']").text()).toBe(
      "1-770-736-8031 x56442"
    );
  });

  // Test comments
  it("should render comments", () => {
    expect(wrapper.find("[data-test='comments-header']").text()).toBe(
      `Top Comments (${post.comments.length})`
    );

    expect(wrapper.findAll("[data-test='comment']")).toHaveLength(
      post.comments.length
    );

    expect(wrapper.findAll("[data-test='commenter-avatar']")[0].text()).toBe("I");
    expect(wrapper.findAll("[data-test='commenter-name']")[0].text()).toBe(
      "id labore ex et quam laborum"
    );
    expect(wrapper.findAll("[data-test='commenter-email']")[0].text()).toBe(
      "Eliseo@gardner.biz"
    );
    expect(wrapper.findAll("[data-test='comment-body']")[0].text()).toBe(
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    );
  });

  // Toggle textarea height
  it("should toggle textarea height", async () => {
    const textarea = wrapper.find("[data-test='comment-textarea']");
    const submitBtn = wrapper.find("[data-test='submit-comment']");
    const cancelBtn = wrapper.find("[data-test='cancel-comment']");

    expect(textarea.attributes("class")).not.toBe("expanded");
    expect(submitBtn.exists()).toBe(false);
    expect(cancelBtn.exists()).toBe(false);
    
    // await textarea.setValue("test");
    // flushPromises();

    // expect(textarea.attributes("class")).toBe("expanded");
  })
});
