import PostsHeader from "../../components/Posts/Header.vue";
import { mount } from "@vue/test-utils";
import ElementPlus from "element-plus";

let wrapper;

describe("Render posts page header successfully", () => {
  beforeEach(() => {
    wrapper = mount(PostsHeader, {
      global: {
        plugins: [ElementPlus],
      },
    });
  });

  it("should render header UI", () => {
    // Check the component is rendered
    expect(wrapper.exists()).toBe(true);

    // Check the text is rendered correctly
    expect(wrapper.find("[data-test='blog-tag']").text()).toBe("Our blog");
    expect(wrapper.find("[data-test='main-header']").text()).toContain(
      "Resources and Insights"
    );
    expect(wrapper.find("[data-test='sub-header']").text()).toContain(
      "The latest industry news, interviews, technologies, and resources."
    );
  });

  it("should search posts successfully", async () => {
    await wrapper.find("[data-test='search-input'").setValue("sunt");
  });
});
