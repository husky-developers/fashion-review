import { useState } from 'react';
import { Box, Flex, Heading, Avatar, Menu, MenuButton, MenuList, MenuItem, Icon, Input, InputGroup, InputLeftElement, Spacer, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Textarea, Tag, TagLabel, TagCloseButton, HStack, Image } from '@chakra-ui/react';
import { FaSearch, FaUser, FaCog, FaSignOutAlt, FaUpload } from 'react-icons/fa';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleTagAdd = (tag: string) => {
    setTags([...tags, tag]);
  };

  const handleTagRemove = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFile(null);
    setDescription('');
    setTags([]);
    setPreviewUrl(null);
  };

  return (
    <Flex bg="gray.100" p={4} alignItems="center">
      <Box flex="1" pl={3}>
        <Heading size="md">Fashion Review</Heading>
      </Box>
      <Spacer />
      <Flex justifyContent="center" w="40%">
        <InputGroup bg="gray.200">
          <InputLeftElement pointerEvents="none" children={<Icon as={FaSearch} color="gray.500" />} />
          <Input type="text" placeholder="Search" onChange={(e) => onSearch(e.target.value)} />
        </InputGroup>
      </Flex>
      <Spacer />
      <Box pr={3}>
        <HStack spacing={2}>
          <Button leftIcon={<Icon as={FaUpload} />} onClick={handleModalOpen}>
            Upload
          </Button>
          <Menu>
            <MenuButton as={Avatar} size="sm" cursor="pointer" />
            <MenuList>
              <MenuItem>
                <Icon as={FaUser} mr={2} />
                Profile
              </MenuItem>
              <MenuItem>
                <Icon as={FaCog} mr={2} />
                Settings
              </MenuItem>
              <MenuItem>
                <Icon as={FaSignOutAlt} mr={2} />
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload a post</ModalHeader>
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>File</FormLabel>
              <Input p={1} type="file" onChange={handleFileChange} />
              {previewUrl && <Image src={previewUrl} mt={2} maxH="200px" />}
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Description</FormLabel>
              <Textarea value={description} onChange={handleDescriptionChange} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Tags</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<Icon as={FaSearch} color="gray.500" />} />
                <Input type="text" placeholder="Add a tag" onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleTagAdd(e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }} />
              </InputGroup>
              <Flex flexWrap="wrap" mt={2}>
                {tags.map((tag) => (
                  <Tag key={tag} mr={2} mb={2} size="md" variant="solid" colorScheme="blue">
                    <TagLabel>{tag}</TagLabel>
                    <TagCloseButton onClick={() => handleTagRemove(tag)} />
                  </Tag>
                ))}
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleModalClose}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={handleModalClose}>
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Navbar;