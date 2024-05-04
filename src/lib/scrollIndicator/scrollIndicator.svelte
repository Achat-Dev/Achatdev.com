<script>
    import ScrollArrow from "./scrollIndicatorArrow.svelte";

    export let scale
    export let opacity
    export let blur
</script>

<ScrollArrow top={"93vh"} up={"92.5vh"} down={"93.2vh"} delay={"0s"} scale={scale} opacity={0.2 * opacity} blur={blur}/>
<ScrollArrow top={"94.5vh"} up={"94vh"} down={"94.7vh"} delay={"0.1s"} scale={scale} opacity={0.6 * opacity} blur={blur}/>
<ScrollArrow top={"96vh"} up={"95.5vh"} down={"96.2vh"} delay={"0.2s"} scale={scale} opacity={1.0 * opacity} blur={blur}/>
