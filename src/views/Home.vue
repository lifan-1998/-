<template>
  <div class="home">
    <!-- 显示当前页面路径 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="top">
      <el-breadcrumb-item>监控资源</el-breadcrumb-item>
      <el-breadcrumb-item>4G新装详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 标签页 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in list" :key="index" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>

    <!-- 页码 -->
    <div class="middle">
      <el-button type="primary">新增监控</el-button>
      <span>
        <img src="../assets/icon/shezhi.png" alt class="mid-img" />
      </span>
      <span class="font">当前网元共监控商标 5 个</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[10, 200, 300, 400]"
        :page-size="10"
        layout="sizes, prev, pager, next, jumper"
        :total="100"
      ></el-pagination>
    </div>

    <!-- 表格 -->
    <div class="table">
      <el-table
        :data="tableData1"
        style="width: 100%"
        row-key="id"
        :span-method="objectSpanMethod"
        border
        lazy
        :load="load"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column
          v-for="(item,index) in tableList"
          :key="index"
          :prop="item.pop"
          :label="item.label"
          :width="item.width"
        >
          <img v-if="index==2" :src="tableData1[0].way" alt class="table-img" />
          <span v-if="index==2">周期不定性预测</span>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeName: "first",
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4,
      tableList: [
        {
          pop: "date",
          label: "监控指标",
          width:180
        },
        {
          pop: "name",
          label: "监控方法",
          width:180
        },
        {
          pop: "address",
          label: "监控时段",
          width:180
        },
        {
          pop: "name",
          label: "修改人",
          width:180
        },
        {
          pop: "date",
          label: "修改时间",
          width:180
        },
        {
          pop: "address",
          label: "操作",
          width:180
        },
      ],
      list: [
        {
          label: "指示看板",
          name: "first",
        },
        {
          label: "告警信息",
          name: "second",
        },
        {
          label: "监控列表",
          name: "third",
        },
        {
          label: "告警接收规则",
          name: "fourth",
        },
      ],
      tableData6: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
      ],
      tableData1: [
        {
          id: 1,
          date: "2016-05-02",
          way: require("../assets/icon/jinggao.png"),
          name: "王小虎",
          address: "删除 修改 查看",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "删除 修改 查看",
          hasChildren: true,
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "删除 修改 查看",
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "删除 修改 查看",
        },
      ],
      count: 0,
    };
  },
  methods: {
    handleClick(tab, event) {},
    handleSizeChange(val) {
    },
    handleCurrentChange(val) {
    },
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 21,
            date: "2016-05-01",
            name: "王小虎",
            address: "删除 修改 查看",
          },
          {
            id: 22,
            date: "2016-05-01",
            name: "王小虎",
            address: "删除 修改 查看",
          },
        ]);
      }, 1000);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 5 && rowIndex > 0) {
      }
      if (columnIndex === 0 && rowIndex >= 2 && rowIndex < 4) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  border: #efefef 2px solid;
  overflow: hidden;
}
.top {
  height: 25px;
  background: #efefef;
  padding-top: 10px;
  padding-left: 5px;
}
::v-deep .el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: black;
}
.middle {
  position: relative;
  display: flex;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 12px;
  flex-direction: row;
}
.mid-img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  padding-top: 10px;
}
.font {
  position: absolute;
  font-size: 14px;
  padding-left: 22%;
  margin-right: 5%;
  padding-top: 6px;
  margin-left: 7%;
}
::v-deep .el-tabs__nav-scroll {
  padding-left: 20px;
}
::v-deep tbody > .el-table__row > .el-table_1_column_6 {
  color: blue;
}
::v-deep .el-pagination {
  margin-left: 34%;
}
.table-img {
  width: 20px;
  height: 20px;
  padding-right: 10px;
}
::v-deep .el-table,
.el-table--fit,
.el-table--border,
.el-table--enable-row-hover,
.el-table--enable-row-transition {
  margin: 2%;
}
.table {
  width: 96%;
}
</style>
