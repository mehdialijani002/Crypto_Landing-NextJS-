import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axios/inceptors";
import DataTable from "react-data-table-component";
import Navbar from "../../component/navbar/index";
import Footer from "../../component/footer/index";
import ReactPaginate from "react-paginate";
import { Modal, Button } from "react-bootstrap";
import { FaTrashCan, FaList } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import style from "../../styles/styles.module.css";
import Form from "../../component/form/index";
import { toast, ToastContainer } from "react-toastify";
import UpButton from "../../component/upButton/index";
import "react-toastify/dist/ReactToastify.css";
const CustomDataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editRowData, setEditRowData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 8;
  const [formData, setFormData] = useState({});
  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };
  const getDataFromLocalStorage = () => {
    const savedData = localStorage.getItem("userData");
    return savedData ? JSON.parse(savedData) : [];
  };
  useEffect(() => {
    const savedUserData = getDataFromLocalStorage();
    setData(savedUserData);
    setLoading(false);
  }, []);
  const handleDelete = async () => {
    if (selectedRow) {
      const newData = data.filter((row) => row.id !== selectedRow.id);
      setData(newData);
      saveDataToLocalStorage(newData);
      toast.info("حذف    با موفقیت انجام شد", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setShowModal(false);
    }
  };

  const handleEdit = (rowData) => {
    if (!editMode || editRowData?.id !== rowData.id) {
      setEditMode(true);
      setEditRowData(rowData);
      setFormData(rowData);
    } else {
      setEditMode(false);
      setEditRowData(null);
      setFormData({});
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/users");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: "نام و نام خانوادگی",
      selector: "name",
      sortable: true,
      width: "150px",
    },
    {
      name: "نام کاربری",
      selector: "username",
      sortable: true,
    },
    {
      name: "ایمیل",
      selector: "email",
      sortable: true,
      width: "150px",
    },
    {
      name: "آدرس",
      selector: "address.city",
      sortable: true,
    },
    {
      name: "شماره همراه",
      selector: "phone",
      sortable: true,
      width: "180px",
    },
    {
      name: "وبسایت",
      selector: "website",
      sortable: true,
    },
    {
      name: "نام شرکت",
      selector: "company.name",
      sortable: true,
      width: "150px",
    },
    {
      name: "ویرایش",
      cell: (row) => (
        <Button
          className={style.dataTableEditButton}
          variant="info"
          onClick={() => handleEdit(row)}
        >
          <span className="mx-1">
            <FaEdit />
            ویرایش
          </span>
        </Button>
      ),
      width: "200px",
      button: true,
    },
    {
      name: "حذف",
      cell: (row) => (
        <Button
          variant="danger"
          className={style.dataTableDeleteButton}
          onClick={() => {
            setSelectedRow(row);
            setShowModal(true);
          }}
        >
          <FaTrashCan />
          <span className="mx-1">حذف</span>
        </Button>
      ),
      button: true,
    },
  ];
  const handleFormSubmit = (formData) => {
    if (editMode && editRowData) {
      const updatedData = data.map((row) =>
        row.id === editRowData.id ? { ...row, ...formData } : row
      );

      const isDataChanged =
        JSON.stringify(updatedData) !== JSON.stringify(data);

      setData(updatedData);

      if (isDataChanged) {
        saveDataToLocalStorage(updatedData);
      }

      setEditMode(false);
      setEditRowData(null);
      setFormData({});
    } else {
      const newData = [...data, formData];

      setData(newData);

      setFormData({});
    }
  };

  const ExpandedComponent = ({ data }) => {
    const { address, username, email, phone, name } = data;

    return (
      <div className={style.tableDropDown}>
        <h5 className={style.tableDropDownHeader}>
          اطلاعات کاربر
          <span className="">{username}</span>
        </h5>
        <div className="mt-3">
          <p>
            <strong>نام و نام خانوادگی : </strong>
            {name}
          </p>
          <p>
            <strong>آدرس : </strong> {address.city},{address.street},
            {address.suite},{address.zipcode}
          </p>
          <p>
            <strong>ایمیل : </strong>
            {email}
          </p>
          <p>
            <strong>شماره همراه : </strong>
            {phone}
          </p>
        </div>
      </div>
    );
  };
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const paginatedData = data.slice(
    currentPage * perPage,
    (currentPage + 1) * perPage
  );

  return (
    <div>
      <Navbar />
      <Form
        onFormSubmit={handleFormSubmit}
        editData={editRowData}
        setFormData={setFormData}
        formData={formData}
      />
      <div className={style.DataTableForm}>
        {loading ? (
          <p>در حال بارگزاری</p>
        ) : (
          <div>
            <DataTable
              title={
                <span>
                  <FaList />
                  اطلاعات کاربران
                </span>
              }
              columns={columns}
              data={paginatedData}
              highlightOnHover
              responsive
              striped
              noDataComponent="اطلاعاتی موجود نیست"
              direction="rtl"
              expandableRows
              expandableRowsComponent={ExpandedComponent}
            />
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={Math.ceil(data.length / perPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={handlePageChange}
              containerClassName={style.pagination}
              activeClassName={style.active}
              previousLinkClassName={style.previous__link}
              nextLinkClassName={style.next__link}
              subContainerClassName={style.pagesPagination}
            />
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                {selectedRow && (
                  <p>
                    برای حذف کاربر <strong>{selectedRow.name}</strong> مطمعن
                    هستید؟{" "}
                  </p>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleDelete}>
                  <FaTrashCan />
                  <span className="mx-1">حذف</span>
                </Button>
              </Modal.Footer>
            </Modal>
            <ToastContainer />
          </div>
        )}
      </div>
      <UpButton />
      <Footer />
    </div>
  );
};

export default CustomDataTable;
