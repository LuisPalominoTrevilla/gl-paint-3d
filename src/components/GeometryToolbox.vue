<template>
  <div class="toolbox card">
    <div class="tool-row" v-for="(n, a) in 3" :key="a">
      <div class="tool">
        <GeometryTool
          :name="tools[a * 2].name"
          :imgSrc="tools[a * 2].img"
          @draw="draw"
        />
      </div>
      <div class="tool">
        <GeometryTool
          :name="tools[a * 2 + 1].name"
          :imgSrc="tools[a * 2 + 1].img"
          @draw="draw"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GeometryTool from './GeometryTool';

export default {
  components: {
    GeometryTool
  },

  data: function() {
    return {
      tools: [
        {
          name: 'Cube',
          img:
            'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/cube-512.png'
        },
        {
          name: 'Sphere',
          img:
            'https://i1.pngguru.com/preview/566/373/153/sphere-white-ball-toy-png-clipart-thumbnail.jpg'
        },
        {
          name: 'Cone',
          img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWydcsCZNtwq1zWlpJeAf7XLhWQf4QYigbXjKmHDAAl7Wd3WcO&usqp=CAU'
        },
        {
          name: 'Plane',
          img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtXDKd4n099o7RQpnJ19mid8pRp9zE4uDdt0lHTGTOJCLU8nlp&usqp=CAU'
        },
        {
          name: 'Icosahedron',
          img:
            'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/cube-512.png'
        },
        {
          name: 'Dodecahedron',
          img:
            'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/cube-512.png'
        }
      ]
    };
  },

  methods: {
    draw: function(name) {
      this.$emit('draw', name);
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbox {
  display: flex;
  flex-direction: column;
}

.tool-row {
  display: flex;
  justify-content: space-around;

  .tool {
    padding: 8px;
    display: flex;
    flex: 1;
  }
}
</style>
