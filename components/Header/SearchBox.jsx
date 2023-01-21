import React from "react";

import Link from "next/link";

import { encode, decode } from "html-entities";

import {
  Stack,
  Box,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  Icon,
  Flex,
  Text,
  Badge,
} from "@chakra-ui/react";

import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Highlight } from "@chakra-ui/react";

import { data } from "../../constants/categoryData";

function SearchBox(props) {
  const [searchHistory, setSearchHistory] = React.useState([
    { id: 1, name: "Elbise", to: "/elbise/" },
    { id: 2, name: "trençkot", to: "/trenckot/" },
    { id: 3, name: "kaban", to: "/kaban/" },
  ]);

  const [result, setResult] = React.useState(false);

  const [closeButtonShow, setCloseButtonShow] = React.useState(false);

  const [inputValue, setInputValue] = React.useState("");
  const isTyping = inputValue.replace(/\s+/, "").length > 0;

  const searchRef = React.useRef();

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setInputValue("");
    }
  };

  React.useEffect(() => {
    const filteredResult = data.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setResult(filteredResult.length > 0 ? filteredResult : false);
  }, [inputValue]);

  React.useEffect(() => {
    if (inputValue.length > 0) {
      setCloseButtonShow(true);
    } else {
      setCloseButtonShow(false);
    }
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") navigate(`/ara?q=${encode(inputValue)}`);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
    if (e.keyCode === 38) {
      console.log("yukarı");
    }
    if (e.keyCode === 40) {
      console.log("aşağı");
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form autocomplete="off" onSubmit={handleSubmit}></form>
    </>
  );
}

export default SearchBox;
