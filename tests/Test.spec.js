import { shallowMount } from "@vue/test-utils";
import TestComponent from "../components/Test.vue";

describe("Test", () => {
  beforeEach(() => {
  })
  
  it("Should test successfully", () => {
    const wrapper = shallowMount(TestComponent);
    // expect(wrapper.exists).toBe(true);
    expect(wrapper.text()).toBe("Hello")
  })
})