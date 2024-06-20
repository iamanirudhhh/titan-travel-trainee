import { getStoryblokApi } from "@storyblok/react";

export async function fetchStoryFromStoryblok(slug, sbParams) {
    const storyblokApi = getStoryblokApi();
    try {
      const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
      return data ? data.story : null;
    } catch (error) {
      console.error(`Error fetching story from Storyblok for slug '${slug}':`, error);
      return null;
    }
}