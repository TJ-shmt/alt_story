<template>
  <div class="home">
    <div>
      <section class="characters section-after">
        <h2>About Alt=(STORY)</h2>
        <h3>The Project</h3>
        <div class="wrapper">
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
          <p id="text">
            <b>alt=“Story”</b> subverts traditional notions of accessibility in
            digital storytelling. This project uses accessibility tools to craft
            a visual text narrative uniquely. Each tool reshapes the story,
            offering different narrative experiences. Screen readers and alt
            texts reveal alternate tales and plot lines, challenging traditional
            story perception. The core idea is intentional inaccessibility,
            revealing a distinct story version with each interaction, thereby
            challenges the boundaries of story perception.
          </p>
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
        </div>
        <h3>The Story</h3>
        <div class="wrapper">
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
          <p id="text">
            The story is set within the cyberpunk universe and incorporates
            various names and references from that world, hence, the overall
            style of the page. Players familiar with this universe may have a
            deeper understanding of certain story elements, while those without
            prior knowledge may encounter elements that are less clear to
            them.<br /><br />

            In a sense, prior knowledge can be considered a form of
            accessibility. While it may not be a traditional tool, the story
            intentionally incorporates information that requires prior knowledge
            to highlight the complexities of achieving good accessibility. Some
            story elements are explained within the game, while others are
            deliberately kept inaccessible to demonstrate the multifaceted
            nature of accessibility considerations.
          </p>
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
        </div>
        <h3>Navigation</h3>
        <div class="wrapper">
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
          <p id="text">
            The modified usage of these tools was a deliberate departure from
            the website's original concept, which aimed to use accessibility
            tools to make the story inaccessible. Instead, my priority was to
            ensure that everyone could easily access and experience the website
            quickly and efficiently while challanging the player to use all
            implemented accessibility tools to get deeper into the story and
            more infromation out of it.<br /><br />

            Navigating with a screen reader can be challenging for newcomers,
            which is why I've implemented a tab and shift-tab keyboard
            navigation system to facilitate the auditory presentation of
            essential text. This adjustment can be deactivated to use the
            regular screenreader navigaton. My project is using the NVDA
            Screenreader, providing an good and free screen reading
            experience.<br /><br />

            Additionally, I've simplified other accessibility features, such as
            adjusting text size and language settings, as they now largely rely
            on browser preferences and regional codes. This approach ensures a
            more seamless and user-friendly experience for all players.
          </p>
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
        </div>
        <h3>UI</h3>
        <div class="wrapper">
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
          <p id="text">
            All icons used in this project are by "The Icon Z" from
            <a
              href="https://thenounproject.com/theiconz/"
              target="_blank"
              title="Language Icons"
              >Noun Project</a
            >
            (CC BY 3.0)
          </p>
          <div class="deko-line">
            <plus-icon class="size" /><plus-icon class="size" />
          </div>
        </div>
        <h3>by Tim Jack Schmitt</h3>
        <h4>Merz Akademie</h4>
      </section>
    </div>
  </div>
</template>

<script setup>
import PlusIcon from "@/components/vueIcons/PlusIcon.vue";
</script>

<style lang="scss" scoped>
.deko-line {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  //background-color: aqua;
  width: 24px;

  .size {
    width: 24px;
  }
}
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-left: 20rem;
  margin-right: 20rem;
  margin-bottom: 3rem;
  background-image: linear-gradient(var(--off-text-16), var(--off-text-16));
  $offset: 36px;
  $offset-position: calc($offset / 2);
  background-repeat: no-repeat;
  background-size: calc(100% - $offset) calc(100% - $offset);
  background-position: $offset-position $offset-position;

  #text {
    padding: 2rem 1rem;
    text-align: justify;
    flex-grow: 1;
  }
}
.keep-scrolling {
  height: 60px;
  width: 100px;
}
section {
  min-height: calc(100vh - 84px);

  display: flex;

  &.section-after {
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
  }
  &.homescreen {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  &.characters {
  }
}

.charCards {
  margin: 1rem 4rem 1rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  gap: 30px;

  $offset: 36px;
  $offset-position: calc($offset / 2);
  background-repeat: no-repeat;
  background-size: calc(100% - $offset) calc(100% - $offset);
  background-position: $offset-position $offset-position;
  $stripe-thickness: 26px;
  background-image: repeating-linear-gradient(
    45deg,
    var(--off-text-8),
    var(--off-text-8) $stripe-thickness,
    transparent $stripe-thickness,
    transparent 2 * $stripe-thickness
  );
}
</style>
