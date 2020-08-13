<template>
  <div class="home">
    <M001Navbar />
    <div class="home-content">
      <div class="col-xs-0 col-sm-0 col-md-3 col-lg-2 left-menu1">
        <M001LeftMenu />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-9 col-lg-10">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <!-- <b-table striped hover :items="items"></b-table> -->
            
            <h3>Danh sách sản phẩm</h3>
            <b-table
              striped
              ref="table"
              responsive
              show-empty
              hover
              :items="items"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
            >
              <template v-slot:cell(image)="data" class="admin_user">
                <img
                  class="user_image"
                  width="90"
                  height="90"
                  v-lazy="data.item.image"
                  alt
                />
              </template>
              <template
                v-slot:cell(name)="data"
              >{{ data.item.name}}</template>
              <template v-slot:cell(location)="data">{{ data.item.location }}</template>
              <template
                v-slot:cell(price)="data"
              >{{ data.item.price | ft_null}}</template>
              <template v-slot:cell(housewife_name)="data">{{ data.item.housewife_name | ft_null }}</template>
              <template
                v-slot:cell(description)="data"
              >{{ data.item.description | ft_null}}</template>
              <template
                v-slot:cell(date)="data"
              >{{ data.item.date | ft_null}}</template>
              <template
                v-slot:cell(foods)="data"
              >{{ data.item.foods | ft_null }}</template>

              <template v-slot:cell(action)="data">
                <b-icon @click="deleteFood(data.item._id, data.item.image_id)" icon="x-circle-fill" class="icon-delete"></b-icon>
                
              </template>
            </b-table>

            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            ></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import M001Navbar from "@/components/m001admin/M001Navbar";
import M001LeftMenu from "@/components/m001admin/M001LeftMenu";

import FoodDataService from "@/../api/foodApi";
import Depart from "@/../DataObject/Department";
export default {
  name: "M001AdminFood",
  components: {
    M001Navbar,
    M001LeftMenu
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      items: [],
      fields: [
        {
          key: "image",
          label: "Hình ảnh",
          sortable: false
        },
        {
          key: "name",
          label: "Tên món",
          sortable: true
        },
        {
          key: "location",
          label: "Miền",
          sortable: true
        },
        {
          key: "price",
          label: "Giá",
          sortable: false
        },
        {
          key: "housewife_name",
          label: "Người nấu",
          sortable: false
        },
        {
          key: "description",
          label: "Mô tả",
          sortable: false
        },
        {
          key: "date",
          label: "Ngày Đăng",
          sortable: true
        },
        {
          key: "foods",
          label: "Nguyên liệu",
          sortable: true
        },
        {
          key: "action",
          label: "Action",
          sortable: false
        }
      ]
    };
  },
  methods: {
    toast(content) {
      this.$bvToast.toast(content, {
        title: "Thông báo",
        toaster: "b-toaster-bottom-left",
        solid: true,
        appendToast: true
      });
    },
    addUser() {
      this.$router.push({ name: "M001AdminAddUser" });
    },
    update(id) {
      this.$router.push({ name: "M001AdminUpdateUser", params: { id: id } });
    },
    deleteFood(id, image_id) {
      FoodDataService.deleteFood(id, image_id)
        .then(() => {
          this.items = this.items.filter(item => {
            return item._id != id;
          });
          this.toast("Xóa food thành công");
        })
        .catch(err => {
            console.log(err.response);
            this.checkErr(err.response);
            this.toast(err.response.data.message);
        });
    },
    getAllFood() {
      FoodDataService.getAllFood()
        .then(data => {
            console.log(data);
          data.data.forEach(departs => {
            let depart = new Depart(departs);
            this.items.push(depart);
          });
        })
        .catch(err => {
          this.checkErr(err.response);
          console.log(err.response);
        });
    }
  },
  mounted() {
    this.getAllFood();
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>